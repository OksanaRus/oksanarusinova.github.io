import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as o,
  c as s,
  m as c,
  s as l,
  u,
} from "./react.hMW2PJqY.mjs";
import { V as d, c as f, o as p, r as m } from "./motion.CaZjHSpz.mjs";
import {
  Ft as h,
  G as g,
  I as _,
  K as v,
  Qt as y,
  T as b,
  Z as x,
  _n as S,
  c as C,
  gn as w,
  ht as T,
  lt as E,
  x as D,
  zt as O,
} from "./framer.CuDPj9y9.mjs";
function k(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K = e(() => {
    (s(),
      T(),
      m(),
      r(),
      (A = [`mDZHNjF_Y`, `kzOl7YxoU`, `UuvWBIUgU`, `EclKrBHSi`, `sAjOGenyB`, `oAvl4MGv4`]),
      (j = `framer-ASqWq`),
      (M = {
        EclKrBHSi: `framer-v-z0moje`,
        kzOl7YxoU: `framer-v-1khf92s`,
        mDZHNjF_Y: `framer-v-kmmf54`,
        oAvl4MGv4: `framer-v-1usr878`,
        sAjOGenyB: `framer-v-scj9kg`,
        UuvWBIUgU: `framer-v-hdh58r`,
      }),
      (N = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (P = { damping: 100, delay: 0, mass: 0.1, stiffness: 500, type: `spring` }),
      (F = { damping: 100, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (I = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (L = (e, t) => `translateX(-50%) ${t}`),
      (R = (e, t) => `translateY(-50%) ${t}`),
      (z = ({ value: e, children: t }) => {
        let r = i(f),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (B = {
        "Active - no animation": `sAjOGenyB`,
        "Book Open": `kzOl7YxoU`,
        "Coming soon 2": `EclKrBHSi`,
        "Coming soon": `UuvWBIUgU`,
        "Non-active - no animation": `oAvl4MGv4`,
        Book: `mDZHNjF_Y`,
      }),
      (V = d.create(a)),
      (H = ({ height: e, id: t, link: n, thumbnail: r, width: i, ...a }) => ({
        ...a,
        variant: B[a.variant] ?? a.variant ?? `mDZHNjF_Y`,
        xc02pDypi: n ?? a.xc02pDypi,
        yJzQYL4DQ: r ??
          a.yJzQYL4DQ ?? {
            pixelHeight: 1372,
            pixelWidth: 1076,
            src: `https://framerusercontent.com/images/r3EElujBdakvs7UUWtPJcLtNwtQ.jpg?width=1076&height=1372`,
            srcSet: `https://framerusercontent.com/images/r3EElujBdakvs7UUWtPJcLtNwtQ.jpg?scale-down-to=1024&width=1076&height=1372 803w,https://framerusercontent.com/images/r3EElujBdakvs7UUWtPJcLtNwtQ.jpg?width=1076&height=1372 1076w`,
          },
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = S(
        c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: c, setLocale: f } = y(),
            m = O(),
            {
              style: g,
              className: v,
              layoutId: S,
              variant: C,
              xc02pDypi: T,
              yJzQYL4DQ: B,
              ...W
            } = H(e),
            {
              baseVariant: G,
              classNames: K,
              clearLoadingGesture: ee,
              gestureHandlers: q,
              gestureVariant: J,
              isLoading: te,
              setGestureState: Y,
              setVariant: X,
              variants: Z,
            } = w({
              cycleOrder: A,
              defaultVariant: `mDZHNjF_Y`,
              ref: i,
              variant: C,
              variantClassNames: M,
            }),
            Q = U(e, Z),
            { activeVariantCallback: $, delay: ne } = h(G),
            re = $(async (...e) => {
              (Y({ isHovered: !0 }), X(`kzOl7YxoU`));
            }),
            ie = $(async (...e) => {
              (Y({ isHovered: !1 }), X(`mDZHNjF_Y`));
            }),
            ae = $(async (...e) => {
              (Y({ isHovered: !0 }), X(`EclKrBHSi`));
            }),
            oe = $(async (...e) => {
              (Y({ isHovered: !1 }), X(`UuvWBIUgU`));
            }),
            se = x(j),
            ce = () => G !== `sAjOGenyB`,
            le = () => ![`UuvWBIUgU`, `EclKrBHSi`, `sAjOGenyB`].includes(G);
          return l(p, {
            id: S ?? s,
            children: l(V, {
              animate: Z,
              initial: !1,
              children: l(z, {
                value: N,
                ...k({ EclKrBHSi: { value: F }, UuvWBIUgU: { value: P } }, G, J),
                children: l(b, {
                  href: T,
                  motionChild: !0,
                  nodeId: `mDZHNjF_Y`,
                  scopeId: `cGJ8D8e0D`,
                  ...k(
                    {
                      EclKrBHSi: { href: void 0 },
                      oAvl4MGv4: { href: void 0 },
                      UuvWBIUgU: { href: void 0 },
                    },
                    G,
                    J
                  ),
                  children: l(d.a, {
                    ...W,
                    ...q,
                    className: `${x(se, `framer-kmmf54`, v, K)} framer-5fo3h9`,
                    "data-framer-name": `Book`,
                    "data-highlight": !0,
                    draggable: `false`,
                    layoutDependency: Q,
                    layoutId: `mDZHNjF_Y`,
                    onMouseEnter: re,
                    ref: i,
                    style: { ...g },
                    ...k(
                      {
                        EclKrBHSi: {
                          "data-framer-name": `Coming soon 2`,
                          onMouseEnter: void 0,
                          onMouseLeave: oe,
                        },
                        kzOl7YxoU: {
                          "data-framer-name": `Book Open`,
                          onMouseEnter: void 0,
                          onMouseLeave: ie,
                        },
                        oAvl4MGv4: {
                          "data-framer-name": `Non-active - no animation`,
                          "data-highlight": void 0,
                          onMouseEnter: void 0,
                        },
                        sAjOGenyB: {
                          "data-framer-name": `Active - no animation`,
                          "data-highlight": void 0,
                          onMouseEnter: void 0,
                        },
                        UuvWBIUgU: { "data-framer-name": `Coming soon`, onMouseEnter: ae },
                      },
                      G,
                      J
                    ),
                    children: u(d.div, {
                      className: `framer-ocg8hn`,
                      "data-framer-name": `Book`,
                      draggable: `false`,
                      layoutDependency: Q,
                      layoutId: `Oa8Ijox7T`,
                      style: { originX: 0, rotateY: 0, transformPerspective: 3e3 },
                      variants: {
                        EclKrBHSi: { rotateY: 0 },
                        kzOl7YxoU: { rotateY: -10 },
                        oAvl4MGv4: { rotateY: 0 },
                        sAjOGenyB: { rotateY: 0 },
                        UuvWBIUgU: { rotateY: 0 },
                      },
                      children: [
                        ce() &&
                          l(D, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: E((m?.y || 0) + 0 + 3),
                              pixelHeight: 1372,
                              pixelWidth: 1076,
                              sizes: `267.9588px`,
                              ...I(B),
                            },
                            className: `framer-pz3mxw`,
                            "data-border": !0,
                            "data-framer-name": `Back`,
                            layoutDependency: Q,
                            layoutId: `Y66F4_N96`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0.5px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 8,
                              originX: 0,
                              rotateY: 0,
                              transformPerspective: 1500,
                            },
                            variants: {
                              EclKrBHSi: { rotateY: 0 },
                              kzOl7YxoU: { rotateY: -10 },
                              oAvl4MGv4: { rotateY: 0 },
                              UuvWBIUgU: { rotateY: 0 },
                            },
                            ...k(
                              {
                                kzOl7YxoU: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: E((m?.y || 0) + 0 + 6),
                                    pixelHeight: 1372,
                                    pixelWidth: 1076,
                                    sizes: `263.2577px`,
                                    ...I(B),
                                  },
                                },
                              },
                              G,
                              J
                            ),
                          }),
                        le() &&
                          u(d.div, {
                            className: `framer-pceww9`,
                            "data-framer-name": `Paper`,
                            layoutDependency: Q,
                            layoutId: `JdGRXTWhP`,
                            style: {
                              backgroundColor: `rgb(237, 237, 237)`,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              rotateY: 85,
                              transformPerspective: 3523,
                              z: -10,
                            },
                            transformTemplate: L,
                            variants: {
                              kzOl7YxoU: {
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 3,
                                borderTopLeftRadius: 3,
                                borderTopRightRadius: 3,
                              },
                              oAvl4MGv4: {
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                            },
                            children: [
                              l(d.div, {
                                className: `framer-3rbcgg`,
                                layoutDependency: Q,
                                layoutId: `sK7XKvQ6C`,
                                style: { backgroundColor: `rgb(196, 196, 196)` },
                              }),
                              l(d.div, {
                                className: `framer-uokq0l`,
                                layoutDependency: Q,
                                layoutId: `bWVCrnwPd`,
                                style: { backgroundColor: `rgb(196, 196, 196)` },
                              }),
                              l(d.div, {
                                className: `framer-1i9z79f`,
                                layoutDependency: Q,
                                layoutId: `eFxwqQoru`,
                                style: { backgroundColor: `rgb(196, 196, 196)` },
                              }),
                            ],
                          }),
                        u(d.div, {
                          className: `framer-17b47d`,
                          "data-border": !0,
                          "data-framer-name": `Front`,
                          layoutDependency: Q,
                          layoutId: `sat9oKpwa`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0.5px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            backgroundColor: `rgb(0, 0, 0)`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 8,
                            boxShadow: `none`,
                            originX: 0,
                            rotateY: 0,
                            transformPerspective: 1500,
                          },
                          transformTemplate: R,
                          variants: {
                            EclKrBHSi: { rotateY: 0 },
                            kzOl7YxoU: { rotateY: -15 },
                            oAvl4MGv4: { boxShadow: `none`, rotateY: 0 },
                            sAjOGenyB: {
                              boxShadow: `0px 0px 0px 1px rgba(255, 255, 255, 0.05)`,
                              rotateY: 0,
                            },
                            UuvWBIUgU: { rotateY: 0 },
                          },
                          children: [
                            l(D, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: E((m?.y || 0) + 0 + 1.25 + 0),
                                pixelHeight: 1372,
                                pixelWidth: 1076,
                                sizes: m?.width || `100vw`,
                                ...I(B),
                              },
                              className: `framer-1vn53dk`,
                              "data-framer-name": `Cover`,
                              layoutDependency: Q,
                              layoutId: `xAvq_eHr6`,
                              style: {
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 3,
                                borderTopRightRadius: 8,
                              },
                              ...k(
                                {
                                  sAjOGenyB: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: E((m?.y || 0) + 0 + 0.75 + 0),
                                      pixelHeight: 1372,
                                      pixelWidth: 1076,
                                      sizes: m?.width || `100vw`,
                                      ...I(B),
                                    },
                                  },
                                },
                                G,
                                J
                              ),
                            }),
                            l(d.div, {
                              className: `framer-3h8okb`,
                              "data-framer-name": `Spine`,
                              layoutDependency: Q,
                              layoutId: `XrJOvBA1V`,
                              style: {
                                background: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0) 22%, rgba(0, 0, 0, 0.15) 30.45995213963964%, rgba(0, 0, 0, 0.05) 35.18616272522522%, rgba(255, 255, 255, 0.1) 49.699113175675684%, rgba(255, 255, 255, 0) 85.02252252252252%)`,
                                opacity: 0.8,
                              },
                            }),
                            l(_, {
                              __fromCanvasComponent: !0,
                              children: l(a, {
                                children: l(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOekF3`,
                                    "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `9px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 14, "wght" 700)`,
                                    "--framer-letter-spacing": `0.03em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `Coming soon`,
                                }),
                              }),
                              className: `framer-186z6zl`,
                              fonts: [`Inter-Variable`],
                              layoutDependency: Q,
                              layoutId: `vDPSfkgMz`,
                              style: {
                                "--extracted-2gg91v": `"opsz" 14, "wght" 700`,
                                "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                opacity: 0,
                              },
                              variants: {
                                EclKrBHSi: { opacity: 0.5 },
                                oAvl4MGv4: { opacity: 0.5 },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(d.div, {
                              className: `framer-61xcyz`,
                              layoutDependency: Q,
                              layoutId: `rUniEl_PQ`,
                              style: {
                                background: `radial-gradient(88% 68% at 0% 0%, rgba(255, 255, 255, 0.03) 0%, rgba(171, 171, 171, 0) 71%)`,
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 3,
                                borderTopRightRadius: 8,
                                boxShadow: `inset 0px -0.5px 0px 1px rgba(255, 255, 255, 0.05), inset 0px 0px 8px 0px rgba(0, 0, 0, 0.25)`,
                              },
                              variants: {
                                sAjOGenyB: {
                                  boxShadow: `inset 0px 0px 4px 2px rgba(255, 255, 255, 0.05), inset 0px 2px 44px 30px rgba(0, 0, 0, 0.25)`,
                                },
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-ASqWq.framer-5fo3h9, .framer-ASqWq .framer-5fo3h9 { display: block; }`,
          `.framer-ASqWq.framer-kmmf54 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 346px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 269px; }`,
          `.framer-ASqWq .framer-ocg8hn { -webkit-user-select: none; aspect-ratio: 0.7780979827089337 / 1; flex: none; height: auto; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 1; }`,
          `.framer-ASqWq .framer-pz3mxw { aspect-ratio: 0.7835051546391752 / 1; bottom: 2px; flex: none; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 1px; top: 3px; width: auto; will-change: var(--framer-will-change-override, transform); z-index: -1; }`,
          `.framer-ASqWq .framer-pceww9 { aspect-ratio: 0.4779969650986343 / 1; bottom: 5px; flex: none; left: 96%; overflow: visible; position: absolute; top: 5px; width: auto; z-index: 0; }`,
          `.framer-ASqWq .framer-3rbcgg { bottom: 0px; flex: none; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 66px; top: 0px; width: 5px; }`,
          `.framer-ASqWq .framer-uokq0l { bottom: 0px; flex: none; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 42px; top: 0px; width: 5px; }`,
          `.framer-ASqWq .framer-1i9z79f { bottom: 0px; flex: none; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 20px; top: 0px; width: 5px; }`,
          `.framer-ASqWq .framer-17b47d { aspect-ratio: 0.783744557329463 / 1; flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 50%; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
          `.framer-ASqWq .framer-1vn53dk { aspect-ratio: 0.7843137254901961 / 1; flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ASqWq .framer-3h8okb { aspect-ratio: 0.07267441860465117 / 1; flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: 0px; width: auto; }`,
          `.framer-ASqWq .framer-186z6zl { flex: none; height: auto; position: absolute; right: 20px; top: 20px; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-ASqWq .framer-61xcyz { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ASqWq.framer-v-1khf92s .framer-pz3mxw { bottom: 5px; right: -12px; top: 6px; }`,
          `.framer-ASqWq.framer-v-1khf92s .framer-pceww9 { aspect-ratio: 0.503030303030303 / 1; bottom: 6px; left: 101%; overflow: hidden; top: 6px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ASqWq.framer-v-hdh58r.framer-kmmf54, .framer-ASqWq.framer-v-z0moje.framer-kmmf54 { height: 347px; overflow: var(--overflow-clip-fallback, clip); }`,
          `.framer-ASqWq.framer-v-hdh58r .framer-ocg8hn { order: 0; }`,
          `.framer-ASqWq[data-border="true"]::after, .framer-ASqWq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-ASqWq`
      )),
      (W.displayName = `Guides Book`),
      (W.defaultProps = { height: 346, width: 269 }),
      v(W, {
        variant: {
          options: [`mDZHNjF_Y`, `kzOl7YxoU`, `UuvWBIUgU`, `EclKrBHSi`, `sAjOGenyB`, `oAvl4MGv4`],
          optionTitles: [
            `Book`,
            `Book Open`,
            `Coming soon`,
            `Coming soon 2`,
            `Active - no animation`,
            `Non-active - no animation`,
          ],
          title: `Variant`,
          type: C.Enum,
        },
        xc02pDypi: { title: `Link`, type: C.Link },
        yJzQYL4DQ: {
          __defaultAssetReference: `data:framer/asset-reference,r3EElujBdakvs7UUWtPJcLtNwtQ.jpg?originalFilename=Front%404x.jpg&width=1076&height=1372`,
          title: `Thumbnail`,
          type: C.ResponsiveImage,
        },
      }),
      (G = [
        { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
        { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
      ]),
      g(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
                variationAxes: G,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
                variationAxes: G,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
                variationAxes: G,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
                variationAxes: G,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
                variationAxes: G,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
                variationAxes: G,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
                variationAxes: G,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { K as n, W as t };
//# sourceMappingURL=cGJ8D8e0D.BOWUN3if.mjs.map
