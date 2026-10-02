import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  H as r,
  M as i,
  O as a,
  P as o,
  R as s,
  S as c,
  U as ee,
  W as l,
  c as u,
  m as d,
  s as f,
  u as p,
  x as m,
  y as h,
} from "./react.hMW2PJqY.mjs";
import { V as g, c as _, o as v, r as y } from "./motion.CaZjHSpz.mjs";
import {
  Ft as b,
  G as x,
  I as S,
  K as C,
  N as w,
  Qt as T,
  St as E,
  T as te,
  Z as D,
  _n as O,
  c as k,
  ct as A,
  gn as j,
  ht as M,
  lt as ne,
  o as N,
  ot as P,
  ut as F,
  x as I,
  z as L,
  zt as R,
} from "./framer.CuDPj9y9.mjs";
import { g as z, h as B, m as V, p as re } from "./shared.DbR_nTE0.mjs";
import { n as H, t as U } from "./Video.rlwz5PPG.mjs";
import {
  d as W,
  f as G,
  i as K,
  n as q,
  p as ie,
  r as J,
  s as Y,
  u as X,
} from "./locales.pkLNO6Dl.mjs";
function Z(e) {
  let {
      shopifyProductID: t,
      canvasPrice: r,
      format: { showCurrency: a, showSymbol: o, showDecimals: s, currencyCode: c } = {},
      fromText: u = `from`,
    } = e,
    d = ie(),
    [g, _] = h(),
    [v, y] = h(),
    [b, x] = h(() => {
      if (l !== void 0) {
        let e = l.__fc_activeSubscription?.[t];
        if (e?.price) return e.price;
      }
      return null;
    }),
    [S, C] = h(``),
    [T, E] = h(``),
    [te, D] = h(``),
    [O, k] = h(!1),
    [A, j] = h({}),
    [M, ne] = h(``),
    [N, P] = h(!1),
    [F, I] = h(!1),
    [L, R] = h({ min: null, max: null }),
    z = i(
      (e, t = !1) => {
        if (!e) return { min: null, max: null };
        let n = t ? `compareAtPriceRange` : `priceRange`,
          r = Y(e, `${n}.minVariantPrice.amount`),
          i = Y(e, `${n}.maxVariantPrice.amount`),
          a = r ? parseFloat(r) : null,
          o = i ? parseFloat(i) : null;
        if (a === null || isNaN(a) || o === null || isNaN(o)) {
          let n = e?.variants?.edges || [];
          if (n.length > 0) {
            let { min: e, max: r } = n.reduce(
              (e, { node: n }) => {
                if (!n) return e;
                let r = Y(n, t ? `compareAtPrice.amount` : `price.amount`),
                  i = r ? parseFloat(r) : NaN;
                return (
                  !isNaN(i) &&
                    i > 0 &&
                    ((e.min === null || i < e.min) && (e.min = i),
                    (e.max === null || i > e.max) && (e.max = i)),
                  e
                );
              },
              { min: null, max: null }
            );
            ((a = e), (o = r));
          }
        }
        return {
          min: typeof a == `number` && !isNaN(a) ? a : null,
          max: typeof o == `number` && !isNaN(o) ? o : null,
        };
      },
      [S]
    );
  (m(() => {
    if (!g || F) return;
    let e = () => {
      let e = z(g, !1);
      (R(e), I(!0));
    };
    `requestIdleCallback` in l ? requestIdleCallback(e, { timeout: 200 }) : setTimeout(e, 100);
  }, [g, F, z]),
    m(() => {
      g && (I(!1), R({ min: null, max: null }));
    }, [g]),
    m(() => {
      if (!d) return;
      let e = localStorage.getItem(`selectedCurrency`),
        t = localStorage.getItem(`selectedCountryCode`),
        n = localStorage.getItem(`selectedCountry`);
      (C(e || `USD`), E(t || `US`), D(n || `United States`));
    }, [d]));
  let B = i(
      async (e) => {
        if (
          !e.detail?.isPurchaseAction &&
          !(!e.detail || e.detail.productId !== `gid://shopify/Product/${t}`)
        ) {
          (ne(e.detail.onClickAction), P(!1), k(!0));
          try {
            let n = (l.shopXtools?.products || []).find(
              ({ node: e }) => e.id === `gid://shopify/Product/${t}`
            );
            if (n) {
              _(n.node);
              let t = n.node?.variants?.edges?.find(({ node: t }) =>
                t.selectedOptions.every((t) =>
                  e.detail.selectedOptions.find((e) => e.name === t.name && e.value === t.value)
                )
              );
              if (t)
                if (e.detail.onClickAction === `purchase`)
                  (y(null),
                    j({ [e.detail.selectedOptions[0].name]: e.detail.selectedOptions[0].value }));
                else if (e.detail?.isCompleteVariant === !1) {
                  if ((y(null), Array.isArray(e.detail.selectedOptions))) {
                    let t = {};
                    (e.detail.selectedOptions.forEach((e) => {
                      e?.name && (t[e.name] = e.value);
                    }),
                      j(t));
                  }
                } else (y(t.node), j({}));
            }
          } catch {
            if (e.detail?.isCompleteVariant)
              (y(e.detail), e.detail.onClickAction !== `purchase` && j({}));
            else if ((y(null), Array.isArray(e.detail?.selectedOptions))) {
              let t = {};
              (e.detail.selectedOptions.forEach((e) => {
                e?.name && (t[e.name] = e.value);
              }),
                j(t));
            }
          } finally {
            k(!1);
          }
        }
      },
      [t]
    ),
    V = i(
      (e) => {
        k(!0);
        let { currency: n, countryCode: r, country: i } = e.detail;
        (C(n), E(r), D(i));
        try {
          let e = (l.shopXtools?.products || []).find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          if (e && (_(e.node), v)) {
            let t = e.node.variants?.edges.find(({ node: e }) =>
              e.selectedOptions.every((e) =>
                v.selectedOptions.find((t) => t.name === e.name && t.value === e.value)
              )
            );
            t && y(t.node);
          }
        } catch {
        } finally {
          k(!1);
        }
      },
      [t, v]
    );
  (m(() => {
    if (d)
      return (
        l.addEventListener(`currency_changed`, V),
        () => {
          l.removeEventListener(`currency_changed`, V);
        }
      );
  }, [d, V]),
    m(() => {
      if (!d) return;
      let e = (e) => {
        if ((g && g.id === `gid://shopify/Product/${t}`) || !Array.isArray(e.detail?.products))
          return;
        let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
        n && (_(n.node), n.node?.variants?.edges?.length === 1 && y(n.node.variants.edges[0].node));
      };
      return (
        document.addEventListener(`data__products-ready`, e),
        document.addEventListener(`product__active-variant__changed`, B),
        () => {
          (document.removeEventListener(`data__products-ready`, e),
            document.removeEventListener(`product__active-variant__changed`, B));
        }
      );
    }, [d, t, S, T, g]));
  let re = async () => {
    try {
      let e = (Array.isArray(l?.shopXtools?.products) ? l.shopXtools.products : []).find(
        ({ node: e }) => e.id === `gid://shopify/Product/${t}`
      );
      e
        ? (_(e.node), e.node?.variants?.edges?.length === 1 && y(e.node.variants.edges[0].node))
        : l?.shopXtools?.getProducts && l.shopXtools.getProducts(t);
    } catch (e) {
      console.error(`Error loading product:`, e);
    }
  };
  (m(() => {
    d && re();
  }, [d]),
    m(() => {
      if (!d || !g || !(g.variants?.edges?.length > 1)) return;
      P(!0);
      let e = setTimeout(() => {
        P(!1);
      }, 1e3);
      return () => {
        clearTimeout(e);
      };
    }, [d, g]),
    m(() => {
      if (!d) return;
      let e = l.__fc_activeSubscription?.[t];
      e?.price && !b && x(e.price);
      let n = (e) => {
          (e.detail?.productId && e.detail.productId !== t) ||
            (e.detail?.price ? x(e.detail.price) : x(null));
        },
        r = (e) => {
          if (e.detail?.isPurchaseAction) return;
          let n = e.detail?.productId,
            r = `gid://shopify/Product/${t}`;
          (n && n !== r) ||
            (P(!1),
            k(!0),
            e.detail?.optionName && e.detail?.value && j({ [e.detail.optionName]: e.detail.value }),
            k(!1));
        };
      return (
        document.addEventListener(`subscription__price-update`, n),
        document.addEventListener(`variant_option_selected`, r),
        document.addEventListener(`__variant_option_selected`, r),
        () => {
          (document.removeEventListener(`subscription__price-update`, n),
            document.removeEventListener(`variant_option_selected`, r),
            document.removeEventListener(`__variant_option_selected`, r));
        }
      );
    }, [d, t]),
    n(() => {
      let e = Y(v, `price.currencyCode`),
        t = Y(g, `priceRange.minVariantPrice.currencyCode`);
      return e || t || `USD`;
    }, [v, g]));
  let H = n(
      () => w.current() === w.canvas || (d && l.location.origin.endsWith(`framercanvas.com`)),
      [d]
    ),
    U = (e, t) => {
      let n = ae(t),
        r = q(T),
        i =
          s === `Always show` || (s !== `Never show` && (s !== `Hide when .00` || e % 1 != 0))
            ? 2
            : 0;
      if (!o && !a)
        return new Intl.NumberFormat(r, {
          style: `decimal`,
          minimumFractionDigits: i,
          maximumFractionDigits: i,
        }).format(e);
      if (t === `USD` && o)
        if (d && /iPad|iPhone|iPod/.test(ee.userAgent) && !l.MSStream) {
          let t = new Intl.NumberFormat(r, {
              style: `decimal`,
              minimumFractionDigits: i,
              maximumFractionDigits: i,
            }).format(e),
            n;
          return ((n = a ? `$${t} USD` : `$${t}`), n);
        } else {
          let t;
          return (
            (t = a
              ? `${new Intl.NumberFormat(r, { style: `currency`, currency: `USD`, minimumFractionDigits: i, maximumFractionDigits: i, currencyDisplay: `narrowSymbol` }).format(e)} USD`
              : new Intl.NumberFormat(r, {
                  style: `currency`,
                  currency: `USD`,
                  minimumFractionDigits: i,
                  maximumFractionDigits: i,
                  currencyDisplay: `narrowSymbol`,
                }).format(e)),
            t
          );
        }
      return n && ((a && !o) || (o && !a) || (a && o))
        ? `${t} ${new Intl.NumberFormat(r, { style: `decimal`, minimumFractionDigits: i, maximumFractionDigits: i }).format(e)}`
        : !o && a
          ? `${new Intl.NumberFormat(r, { style: `decimal`, minimumFractionDigits: i, maximumFractionDigits: i }).format(e)} ${t}`
          : o && !a
            ? new Intl.NumberFormat(r, {
                style: `currency`,
                currency: t,
                minimumFractionDigits: i,
                maximumFractionDigits: i,
                currencyDisplay: `narrowSymbol`,
              }).format(e)
            : `${new Intl.NumberFormat(r, { style: `currency`, currency: t, minimumFractionDigits: i, maximumFractionDigits: i, currencyDisplay: `narrowSymbol` }).format(e)} ${t}`;
    },
    W = n(() => {
      if (!d) return ``;
      if (w !== void 0 && (w.current() === w.canvas || H)) {
        let t, n;
        if (r) {
          let e = r.split(`-`);
          e.length === 2 ? ((t = e[0].trim()), (n = e[1].trim())) : ((t = r), (n = r));
        }
        let i = parseFloat(t),
          a = parseFloat(n),
          o = c || `USD`,
          s = U(i, o);
        if (e.displayPrice === `minimum price`) return Math.abs(i - a) < 0.01 ? s : `${u} ${s}`;
        if (e.displayPrice === `range`) {
          let e = U(a, o);
          return Math.abs(i - a) < 0.01 ? s : `${s} - ${e}`;
        }
        return s;
      }
      let t = b || (v && Y(v, `price.amount`));
      if (!t && !v && !g?.priceRange) return ``;
      let n = S || c || `USD`,
        { min: i, max: a } = L.min === null ? z(g, !1) : L;
      if (t) {
        let e = parseFloat(t);
        return isNaN(e) ? `` : U(e, n);
      }
      if (g?.variants?.edges?.length === 1 && !v) {
        let e = g.variants.edges[0].node;
        if (e?.price?.amount) {
          let t = parseFloat(e.price.amount);
          if (!isNaN(t)) return U(t, n);
        }
      }
      let o = Object.keys(A).length > 0,
        s = v && v.selectedOptions?.length > 0;
      if (o && !s && g?.variants?.edges?.length && M !== `purchase`) {
        let t = g.variants.edges.filter(({ node: e }) =>
          e.selectedOptions.every((e) => !A[e.name] || A[e.name] === e.value)
        );
        if (t.length > 0) {
          let r = t.map(({ node: e }) => parseFloat(e.price?.amount || `0`)).filter((e) => e > 0);
          if (r.length > 0) {
            let t = Math.min(...r),
              i = Math.max(...r),
              a = U(t, n);
            if (e.displayPrice === `range`) return Math.abs(t - i) < 0.01 ? a : `${a} - ${U(i, n)}`;
            if (e.displayPrice === `minimum price`) return Math.abs(t - i) < 0.01 ? a : `${u} ${a}`;
          }
        }
      }
      if ((!v && g?.priceRange) || (M === `purchase` && g?.priceRange)) {
        if (N) return ``;
        if (i) {
          let t = U(i, n);
          if (a && Math.abs(i - a) > 0.01) {
            if (e.displayPrice === `range`) return `${t} - ${U(a, n)}`;
            if (e.displayPrice === `minimum price`) return Math.abs(i - a) < 0.01 ? t : `${u} ${t}`;
          }
          return e.displayPrice === `range` || (a && Math.abs(i - a) < 0.01) ? t : `${u} ${t}`;
        }
        let t = Y(g, `priceRange.minVariantPrice.amount`),
          r = Y(g, `priceRange.maxVariantPrice.amount`);
        if (t) {
          let i = parseFloat(t);
          if (!isNaN(i) && i > 0) {
            let t = U(i, n);
            if (e.displayPrice === `range`) {
              if (r) {
                let e = parseFloat(r);
                if (!isNaN(e) && e > 0 && Math.abs(i - e) > 0.01) return `${t} - ${U(e, n)}`;
              }
              return t;
            }
            if (r) {
              let e = parseFloat(r);
              if (!isNaN(e) && Math.abs(i - e) < 0.01) return t;
            }
            return `${u} ${t}`;
          }
        }
      }
      return ``;
    }, [d, H, v, g, r, a, o, c, s, S, T, b, e.displayPrice, A, M, u, N, z]),
    G = n(() => {
      if (Object.keys(A).length > 0 && g?.variants?.edges?.length) {
        let e = g.variants.edges.filter(({ node: e }) =>
          e.selectedOptions.every((e) => !A[e.name] || A[e.name] === e.value)
        );
        if (
          !e.every(({ node: e }) => {
            let t = Y(e, `compareAtPrice.amount`);
            return t && parseFloat(t) > 0;
          })
        )
          return ``;
        let t = e
          .map(({ node: e }) => parseFloat(Y(e, `compareAtPrice.amount`) || `0`))
          .filter((e) => e > 0);
        if (t.length > 0) {
          let e = Math.min(...t);
          return U(e, S || c || `USD`);
        }
      }
      if (v) {
        let e = Y(v, `compareAtPrice.amount`);
        if (!e) return ``;
        let t = parseFloat(e);
        return isNaN(t) || t <= 0 ? `` : U(t, S || c || `USD`);
      }
      if (g?.variants?.edges?.length) {
        if (
          !g.variants.edges.every(({ node: e }) => {
            let t = Y(e, `compareAtPrice.amount`);
            return t && parseFloat(t) > 0;
          })
        )
          return ``;
        let e = Y(g, `compareAtPriceRange.minVariantPrice.amount`);
        if (!e) return ``;
        let t = parseFloat(e);
        return isNaN(t) || t <= 0 ? `` : U(t, S || c || `USD`);
      }
      return ``;
    }, [v, g, A, c, a, o, s, S, T, H, e.format]),
    K = n(() => parseFloat(G.replace(/[^\d.-]/g, ``)), [G]),
    J = !isNaN(K) && K > 0;
  n(() => {
    if (H) return !0;
    if (!W) return !1;
    let e = parseFloat(W.replace(/[^\d.-]/g, ``));
    return !isNaN(e) && e > 0;
  }, [W, H]);
  let X = n(() => {
    let t = {
        margin: 0,
        padding: 0,
        lineHeight: 1,
        whiteSpace: `nowrap`,
        display: `inline-block`,
        width: `auto`,
      },
      n = J ? e.saleFont : e.regularFont,
      r = J ? e.saleColor : e.regularColor;
    return { ...t, ...n, color: r };
  }, [J, e.saleFont, e.regularFont, e.saleColor, e.regularColor]);
  if (!d || O || (!g && !v && !b && !H)) return f(`div`, { style: { display: `none` } });
  let Z = g && !F && g.variants?.edges?.length > 1;
  return f(`div`, {
    style: {
      display: `inline-block`,
      maxWidth: `100%`,
      width: `auto`,
      whiteSpace: `nowrap`,
      overflow: `visible`,
      transform: `none`,
      transition: `none`,
      animation: `none`,
      willChange: `auto`,
    },
    children: p(`p`, {
      style: { ...X, transform: `none`, transition: `none`, animation: `none`, willChange: `auto` },
      children: [
        W,
        Z &&
          f(`span`, {
            style: { opacity: 0.6, fontSize: `0.8em`, marginLeft: `4px` },
            children: `...`,
          }),
      ],
    }),
  });
}
var ae,
  oe = e(() => {
    (r(),
      u(),
      a(),
      M(),
      K(),
      G(),
      X(),
      J(),
      (ae = (e) => {
        if (!e) return !1;
        if (W.includes(e)) return !0;
        try {
          return (
            new Intl.NumberFormat(void 0, {
              style: `currency`,
              currency: e,
              currencyDisplay: `narrowSymbol`,
            })
              .format(0)
              .replace(/[0-9.,\s]/g, ``) === e
          );
        } catch {
          return !1;
        }
      }),
      (Z.defaultProps = {
        shopifyProductID: ``,
        canvasPrice: `50.00`,
        fromText: `from`,
        format: {
          showCurrency: !0,
          showSymbol: !0,
          currencyCode: `USD`,
          showDecimals: `Always show`,
        },
      }),
      C(Z, {
        shopifyProductID: {
          type: k.String,
          title: `Product ID`,
          description: `Connect to CMS (required).`,
        },
        canvasPrice: {
          type: k.String,
          title: `Price`,
          defaultValue: `50.00`,
          description: `Connect to CMS (for canvas preview only).`,
        },
        displayPrice: {
          type: k.Enum,
          title: `Varying Prices`,
          options: [`minimum price`, `range`],
          optionTitles: [`Minimum Price`, `Range`],
          defaultValue: `minimum price`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          description: `When a product has multiple prices and a variant has not been selected.`,
        },
        fromText: {
          type: k.String,
          title: `Prefix`,
          placeholder: `from`,
          defaultValue: `from`,
          hidden: (e) => e.displayPrice !== `minimum price`,
        },
        format: {
          type: k.Object,
          title: `Format`,
          controls: {
            showSymbol: {
              type: k.Boolean,
              title: `Symbol`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `$, £, €, etc.`,
            },
            showCurrency: {
              type: k.Boolean,
              title: `Code`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `USD, EUR, CHF, etc.`,
            },
            showDecimals: {
              type: k.Enum,
              title: `Decimals`,
              defaultValue: `Always show`,
              options: [`Always show`, `Never show`, `Hide when .00`],
              optionTitles: [`Always show`, `Never show`, `Hide when .00`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            currencyCode: {
              type: k.Enum,
              title: `Preview`,
              defaultValue: `USD`,
              options:
                `USD.EUR.GBP.CHF.JPY.CAD.AUD.CNY.HKD.NZD.SEK.KRW.SGD.NOK.MXN.INR.RUB.ZAR.TRY.BRL.TWD.DKK.PLN.THB.IDR.HUF.CZK.ILS.CLP.PHP.AED.COP.SAR.MYR.RON`.split(
                  `.`
                ),
              description: `Currency is for canvas preview only.`,
            },
          },
        },
        regularFont: { type: k.Font, title: `Regular`, controls: `extended` },
        regularColor: { type: k.Color, title: `↳ Color`, defaultValue: `#000` },
        saleFont: { type: k.Font, title: `Sale`, controls: `extended` },
        saleColor: { type: k.Color, title: `↳ Color`, defaultValue: `#FF0000` },
      }));
  });
function Q(e) {
  let {
      shopifyProductID: t,
      canvasPrice: r,
      format: { showCurrency: a, showSymbol: o, showDecimals: s, currencyCode: u } = {},
      strikethrough: d,
      strikethroughColor: p,
      strikethroughSize: g,
      font: _,
      color: v,
      compareAtPrefix: y = ``,
    } = e,
    [b, x] = h(),
    [S, C] = h(),
    [T, E] = h(``),
    [te, D] = h(``),
    [O, k] = h(``),
    [A, j] = h({}),
    [M, ne] = h(``),
    N = ie(),
    P = i((e) => {
      if (!e) return e;
      let t = e?.variants?.edges;
      return Array.isArray(t)
        ? e
        : { ...e, variants: { ...(e.variants || {}), edges: Array.isArray(t) ? t : [] } };
    }, []);
  m(() => {
    if (!N) return;
    let e = localStorage.getItem(`selectedCurrency`),
      t = localStorage.getItem(`selectedCountryCode`),
      n = localStorage.getItem(`selectedCountry`);
    (E(e || `USD`), D(t || `US`), k(n || `United States`));
  }, [N]);
  let F = n(() => {
      let e = Y(S, `price.currencyCode`),
        t = Y(b, `priceRange.minVariantPrice.currencyCode`);
      return e || t || `USD`;
    }, [S, b]),
    I = n(
      () =>
        w !== void 0 &&
        (w.current() === w.canvas || (N && l.location.origin.endsWith(`framercanvas.com`))),
      [N]
    ),
    L = c(new Map()),
    R = i(
      (e) => {
        if (!e) return { min: null, max: null };
        let t = F || T || `USD`,
          n = `${e.id || `no-id`}-${t}-compare`;
        if (L.current.has(n)) return L.current.get(n);
        let r = Y(e, `compareAtPriceRange.minVariantPrice.amount`),
          i = Y(e, `compareAtPriceRange.maxVariantPrice.amount`),
          a = r ? parseFloat(r) : null,
          o = i ? parseFloat(i) : null;
        if (a === null || isNaN(a) || o === null || isNaN(o)) {
          let t = e?.variants?.edges || [];
          for (let e = 0; e < (Array.isArray(t) ? t.length : 0); e++) {
            let n = t[e]?.node;
            if (!n) continue;
            let r = Y(n, `compareAtPrice.amount`),
              i = r ? parseFloat(r) : NaN;
            !isNaN(i) &&
              i > 0 &&
              ((a === null || i < a) && (a = i), (o === null || i > o) && (o = i));
          }
        }
        let s = {
          min: typeof a == `number` && !isNaN(a) ? a : null,
          max: typeof o == `number` && !isNaN(o) ? o : null,
        };
        return (L.current.set(n, s), s);
      },
      [F, T]
    ),
    z = n(() => R(b), [b, R]),
    B = (e, t) => {
      let n = ce(t),
        r = se(te),
        i =
          s === `Always show` || (s !== `Never show` && (s !== `Hide when .00` || e % 1 != 0))
            ? 2
            : 0;
      if (!o && !a)
        return new Intl.NumberFormat(r, {
          style: `decimal`,
          minimumFractionDigits: i,
          maximumFractionDigits: i,
        }).format(e);
      if (t === `USD` && o)
        if (N && /iPad|iPhone|iPod/.test(ee.userAgent) && !(`MSStream` in l)) {
          let t = new Intl.NumberFormat(r, {
            style: `decimal`,
            minimumFractionDigits: i,
            maximumFractionDigits: i,
          }).format(e);
          return a ? `$${t} USD` : `$${t}`;
        } else if (a)
          return `${new Intl.NumberFormat(r, { style: `currency`, currency: `USD`, minimumFractionDigits: i, maximumFractionDigits: i, currencyDisplay: `narrowSymbol` }).format(e)} USD`;
        else
          return new Intl.NumberFormat(r, {
            style: `currency`,
            currency: `USD`,
            minimumFractionDigits: i,
            maximumFractionDigits: i,
            currencyDisplay: `narrowSymbol`,
          }).format(e);
      return n && ((a && !o) || (o && !a) || (a && o))
        ? `${t} ${new Intl.NumberFormat(r, { style: `decimal`, minimumFractionDigits: i, maximumFractionDigits: i }).format(e)}`
        : !o && a
          ? `${new Intl.NumberFormat(r, { style: `decimal`, minimumFractionDigits: i, maximumFractionDigits: i }).format(e)} ${t}`
          : o && !a
            ? new Intl.NumberFormat(r, {
                style: `currency`,
                currency: t,
                minimumFractionDigits: i,
                maximumFractionDigits: i,
                currencyDisplay: `narrowSymbol`,
              }).format(e)
            : `${new Intl.NumberFormat(r, { style: `currency`, currency: t, minimumFractionDigits: i, maximumFractionDigits: i, currencyDisplay: `narrowSymbol` }).format(e)} ${t}`;
    },
    V = n(() => {
      if (!N) return ``;
      if (w !== void 0 && (w.current() === w.canvas || I)) {
        let e, t;
        if (r) {
          let n = r.split(`-`);
          Array.isArray(n) && n.length === 2
            ? ((e = n[0].trim()), (t = n[1].trim()))
            : ((e = r), (t = r));
        }
        let n = parseFloat(e),
          i = parseFloat(t),
          a = u || `USD`;
        if (n === i && n > 0 && i > 0) {
          let e = B(n, a);
          return y ? `${y} ${e}` : e;
        } else return ``;
      }
      let e = S && Y(S, `compareAtPrice.amount`),
        { min: t, max: n } = z;
      if (!e && !S && !b?.compareAtPriceRange && !(t && n)) return ``;
      let i = T || u || `USD`;
      if (e) {
        let t = parseFloat(e);
        if (isNaN(t)) return ``;
        let n = B(t, i);
        return y ? `${y} ${n}` : n;
      }
      let a = Object.keys(A || {}).length > 0,
        o = S && Array.isArray(S.selectedOptions) && S.selectedOptions.length > 0;
      if (o && M === `purchase` && b?.variants?.edges?.length) return ``;
      let s = Array.isArray(b?.variants?.edges) && (b?.variants?.edges?.length || 0) > 0;
      if (a && !o && s) {
        let e = (b?.variants?.edges || []).filter(({ node: e }) =>
          e.selectedOptions.every((e) => !A[e.name] || A[e.name] === e.value)
        );
        if (Array.isArray(e) && e.length > 0) {
          let t = e
            .map(({ node: e }) => Y(e, `compareAtPrice.amount`))
            .filter((e) => e && e !== `0` && e !== `0.00`);
          if (
            !Array.isArray(t) ||
            t.length === 0 ||
            !e.every(({ node: e }) => {
              let t = Y(e, `compareAtPrice.amount`);
              return t && t !== `0` && t !== `0.00`;
            })
          )
            return ``;
          let n = t.map((e) => parseFloat(e)).filter((e) => !isNaN(e) && e > 0);
          if (!Array.isArray(n) || n.length === 0) return ``;
          let r = Math.min(...n),
            a = Math.max(...n);
          if (Math.abs(r - a) < 0.01) {
            let e = B(r, i);
            return y ? `${y} ${e}` : e;
          } else return ``;
        }
      }
      if (!S && !a && s) {
        if (
          !(b?.variants?.edges || []).every(({ node: e }) => {
            let t = Y(e, `compareAtPrice.amount`);
            return t && t !== `0` && t !== `0.00`;
          })
        )
          return ``;
        let e = t,
          r = n;
        if (e && r)
          if (Math.abs(e - r) < 0.01) {
            let t = B(e, i);
            return y ? `${y} ${t}` : t;
          } else return ``;
        return ``;
      }
      return ``;
    }, [N, I, S, b, r, a, o, u, s, T, te, A, M, y, e.format]),
    re = n(() => (I ? r && r.trim() !== `` : V && V.trim() !== ``), [I, r, V]);
  return (
    m(() => {
      if (!N) return;
      let e = (e) => {
        let { currency: n, countryCode: r, country: i } = e.detail;
        (E(n), D(r), k(i));
        try {
          let e = (l.shopXtools?.products || []).find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          if (e && (x(P(e.node)), S)) {
            let t = (e?.node?.variants?.edges || []).find(({ node: e }) => {
              let t = Array.isArray(e?.selectedOptions) ? e.selectedOptions : [],
                n = Array.isArray(S?.selectedOptions) ? S.selectedOptions : [];
              return t.every((e) => n.some((t) => t?.name === e?.name && t?.value === e?.value));
            });
            t && C(t.node);
          }
        } catch {}
      };
      return (
        l.addEventListener(`currency_changed`, e),
        () => {
          l.removeEventListener(`currency_changed`, e);
        }
      );
    }, [N, t, S, T, te]),
    m(() => {
      if (!N) return;
      let e = (e) => {
          if (!(e.detail?.isPurchaseAction || e.detail?.onClickAction === `purchase`))
            try {
              let n = `gid://shopify/Product/${t}`;
              if (e.detail && (!e.detail.productId || e.detail.productId !== n)) return;
              if (
                (e.detail.productId !== n && ne(e.detail.onClickAction),
                e.detail?.isCompleteVariant === !1)
              ) {
                if ((C(null), Array.isArray(e.detail.selectedOptions))) {
                  let t = {};
                  (e.detail.selectedOptions.forEach((e) => {
                    e?.name && (t[e.name] = e.value);
                  }),
                    j(t));
                }
                return;
              }
              let r = (l.shopXtools?.products || []).find(
                ({ node: e }) => e.id === `gid://shopify/Product/${t}`
              );
              if (r) {
                x(P(r.node));
                let t = (r?.node?.variants?.edges || []).find(({ node: t }) => {
                  let n = Array.isArray(t?.selectedOptions) ? t.selectedOptions : [],
                    r = Array.isArray(e.detail?.selectedOptions) ? e.detail.selectedOptions : [];
                  return n.every((e) =>
                    r.some((t) => t?.name === e?.name && t?.value === e?.value)
                  );
                });
                t
                  ? e.detail.onClickAction === `purchase`
                    ? (C(null),
                      j({ [e.detail.selectedOptions[0].name]: e.detail.selectedOptions[0].value }))
                    : (C(t.node), j({}))
                  : e.detail?.isCompleteVariant &&
                    (C(e.detail), e.detail.onClickAction !== `purchase` && j({}));
              }
            } catch {
              if (e.detail?.isCompleteVariant)
                (C(e.detail), e.detail.onClickAction !== `purchase` && j({}));
              else if ((C(null), Array.isArray(e.detail?.selectedOptions))) {
                let t = {};
                (e.detail.selectedOptions.forEach((e) => {
                  e?.name && (t[e.name] = e.value);
                }),
                  j(t));
              }
            }
        },
        n = (e) => {
          if (Array.isArray(e.detail.products)) {
            let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
            (x(n ? P(n.node) : null),
              Array.isArray(n?.node?.variants?.edges) &&
                (n?.node?.variants?.edges?.length || 0) === 1 &&
                C(n.node.variants.edges[0].node));
          }
        },
        r = (e) => {
          if (e.detail?.isPurchaseAction) return;
          let n = e.detail?.productId,
            r = `gid://shopify/Product/${t}`;
          (n && n !== r) ||
            (e.detail?.optionName &&
              e.detail?.value &&
              j({ [e.detail.optionName]: e.detail.value }));
        };
      if (
        ((async () => {
          try {
            let e = (l.shopXtools?.products || []).find(
              ({ node: e }) => e.id === `gid://shopify/Product/${t}`
            );
            e &&
              (x(P(e.node)),
              Array.isArray(e.node?.variants?.edges) &&
                (e?.node?.variants?.edges?.length || 0) === 1 &&
                C(e.node.variants.edges[0].node));
          } catch {}
        })(),
        l.shopXtools?.products)
      ) {
        let e = l.shopXtools.products;
        if (Array.isArray(e) && e.length > 0) {
          let n = e.find(({ node: e }) => e?.id === `gid://shopify/Product/${t}`);
          n?.node
            ? (x(P(n.node)),
              Array.isArray(n.node?.variants?.edges) &&
                (n?.node?.variants?.edges?.length || 0) === 1 &&
                C(n.node.variants.edges[0].node))
            : x(null);
        }
      }
      return (
        document.addEventListener(`data__products-ready`, n),
        document.addEventListener(`product__active-variant__changed`, e),
        document.addEventListener(`variant_option_selected`, r),
        document.addEventListener(`__variant_option_selected`, r),
        () => {
          (document.removeEventListener(`data__products-ready`, n),
            document.removeEventListener(`product__active-variant__changed`, e),
            document.removeEventListener(`variant_option_selected`, r),
            document.removeEventListener(`__variant_option_selected`, r));
        }
      );
    }, [N, t, T]),
    N
      ? re
        ? f(`div`, {
            style: {
              display: `inline-block`,
              maxWidth: `100%`,
              width: `auto`,
              whiteSpace: `nowrap`,
              overflow: `visible`,
              transform: `none`,
              transition: `none`,
              animation: `none`,
              willChange: `auto`,
            },
            children: f(`p`, {
              style: {
                ..._,
                color: v,
                margin: 0,
                padding: 0,
                lineHeight: 1,
                textDecoration: d ? `line-through` : `none`,
                textDecorationColor: p,
                textDecorationThickness: d ? `${g}px` : void 0,
                whiteSpace: `nowrap`,
                display: `inline-block`,
                width: `auto`,
                transform: `none`,
                transition: `none`,
                animation: `none`,
                willChange: `auto`,
              },
              children: V,
            }),
          })
        : null
      : f(`div`, { style: { display: `none` } })
  );
}
var se,
  ce,
  le = e(() => {
    (r(),
      u(),
      a(),
      M(),
      K(),
      G(),
      X(),
      (se = (e) => {
        if (e)
          return (
            {
              US: `en-US`,
              CA: `en-CA`,
              QC: `fr-CA`,
              GB: `en-GB`,
              FR: `fr-FR`,
              DE: `de-DE`,
              IT: `it-IT`,
              ES: `es-ES`,
              PT: `pt-PT`,
              NL: `nl-NL`,
              BE: `fr-BE`,
              LU: `fr-LU`,
              CH: `de-CH`,
              AT: `de-AT`,
              SE: `sv-SE`,
              NO: `nb-NO`,
              DK: `da-DK`,
              FI: `fi-FI`,
              PL: `pl-PL`,
              CZ: `cs-CZ`,
              HU: `hu-HU`,
              RU: `ru-RU`,
              CN: `zh-CN`,
              JP: `ja-JP`,
              KR: `ko-KR`,
              IN: `en-IN`,
              AU: `en-AU`,
              NZ: `en-NZ`,
              MX: `es-MX`,
              BR: `pt-BR`,
              AR: `es-AR`,
              CL: `es-CL`,
              CO: `es-CO`,
              PE: `es-PE`,
              AE: `ar-AE`,
              SA: `ar-SA`,
              ZA: `en-ZA`,
              IL: `he-IL`,
            }[e] || void 0
          );
      }),
      (ce = (e) => {
        if (!e) return !1;
        if (W.includes(e)) return !0;
        try {
          return (
            new Intl.NumberFormat(void 0, {
              style: `currency`,
              currency: e,
              currencyDisplay: `narrowSymbol`,
            })
              .format(0)
              .replace(/[0-9.,\s]/g, ``) === e
          );
        } catch {
          return !1;
        }
      }),
      (Q.defaultProps = {
        shopifyProductID: ``,
        strikethrough: !0,
        strikethroughColor: `#000000`,
        strikethroughSize: 1,
        canvasPrice: `75.00`,
        compareAtPrefix: ``,
        format: {
          showCurrency: !0,
          showSymbol: !0,
          currencyCode: `USD`,
          showDecimals: `Always show`,
        },
      }),
      C(Q, {
        shopifyProductID: {
          type: k.String,
          title: `Product ID`,
          description: `Connect to CMS (required).`,
        },
        canvasPrice: {
          type: k.String,
          title: `Compare Price`,
          description: `Connect to CMS (for canvas preview only).`,
          defaultValue: `75.00`,
        },
        compareAtPrefix: { type: k.String, title: `Prefix`, placeholder: `was`, defaultValue: `` },
        format: {
          type: k.Object,
          title: `Format`,
          controls: {
            showSymbol: {
              type: k.Boolean,
              title: `Symbol`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `$, £, €, etc.`,
            },
            showCurrency: {
              type: k.Boolean,
              title: `Code`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `USD, EUR, CHF, etc.`,
            },
            showDecimals: {
              type: k.Enum,
              title: `Decimals`,
              defaultValue: `Always show`,
              options: [`Always show`, `Never show`, `Hide when .00`],
              optionTitles: [`Always show`, `Never show`, `Hide when .00`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            currencyCode: {
              type: k.Enum,
              title: `Preview`,
              defaultValue: `USD`,
              options:
                `USD.EUR.GBP.CHF.JPY.CAD.AUD.CNY.HKD.NZD.SEK.KRW.SGD.NOK.MXN.INR.RUB.ZAR.TRY.BRL.TWD.DKK.PLN.THB.IDR.HUF.CZK.ILS.CLP.PHP.AED.COP.SAR.MYR.RON`.split(
                  `.`
                ),
              description: `Currency on your site is automatic, this is only shown in canvas preview.`,
            },
          },
        },
        font: { type: k.Font, title: `Font`, controls: `extended` },
        color: { type: k.Color, title: `Color`, defaultValue: `#000` },
        strikethrough: { type: k.Boolean, title: `Strike`, defaultValue: !0 },
        strikethroughSize: {
          type: k.Number,
          title: `↳ Size`,
          defaultValue: 1,
          min: 0,
          max: 8,
          step: 0.1,
          hidden: (e) => !e.strikethrough,
        },
        strikethroughColor: {
          type: k.Color,
          title: `↳ Color`,
          defaultValue: `#000000`,
          hidden: (e) => !e.strikethrough,
        },
      }));
  });
function ue(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  $,
  Oe = e(() => {
    (u(),
      M(),
      y(),
      a(),
      H(),
      oe(),
      le(),
      z(),
      (de = P(U)),
      (fe = P(Z)),
      (pe = P(Q)),
      (me = F(U)),
      (he = [`t8MI3vX_J`, `bKZaXGAoG`]),
      (ge = `framer-yac9B`),
      (_e = { bKZaXGAoG: `framer-v-17rkc7e`, t8MI3vX_J: `framer-v-1s3hp6r` }),
      (ve = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      E(),
      (ye = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (be = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.01,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.7, type: `spring` },
      }),
      (xe = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (Se = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Ce = ({ value: e, children: t }) => {
        let r = o(_),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(_.Provider, { value: a, children: t });
      }),
      (we = { "Hover Playing": `bKZaXGAoG`, Video: `t8MI3vX_J` }),
      (Te = g.create(s)),
      (Ee = ({
        compare: e,
        height: t,
        id: n,
        link: r,
        name1: i,
        poster: a,
        price: o,
        price2: s,
        productID: c,
        title: ee,
        video: l,
        width: u,
        ...d
      }) => ({
        ...d,
        c6lSflApp: i ?? d.c6lSflApp ?? `Logo Tee`,
        hy9nT4IgJ: e ?? d.hy9nT4IgJ ?? `29.00`,
        K3VDJ7McJ: s ?? d.K3VDJ7McJ ?? !0,
        LQjLsXvXk: c ?? d.LQjLsXvXk ?? `9989927764301`,
        oYv8ppbKX: r ?? d.oYv8ppbKX,
        qj9dFm58d:
          l ?? d.qj9dFm58d ?? `https://framerusercontent.com/assets/LaC4X3gYkkb72yaHTbMyHOW9qk.mp4`,
        rm7BQEm01: ee ?? d.rm7BQEm01 ?? !0,
        variant: we[d.variant] ?? d.variant ?? `t8MI3vX_J`,
        W6N3t8onY: o ?? d.W6N3t8onY ?? `50`,
        xjFRNW5Ck: a ??
          d.xjFRNW5Ck ?? {
            pixelHeight: 1140,
            pixelWidth: 1140,
            src: `https://framerusercontent.com/images/H6Iqr9r1DN2MMd7UDJvGW1Sx47Y.png?width=1140&height=1140`,
            srcSet: `https://framerusercontent.com/images/H6Iqr9r1DN2MMd7UDJvGW1Sx47Y.png?scale-down-to=512&width=1140&height=1140 512w,https://framerusercontent.com/images/H6Iqr9r1DN2MMd7UDJvGW1Sx47Y.png?scale-down-to=1024&width=1140&height=1140 1024w,https://framerusercontent.com/images/H6Iqr9r1DN2MMd7UDJvGW1Sx47Y.png?width=1140&height=1140 1140w`,
          },
      })),
      (De = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = O(
        d(function (e, n) {
          let r = c(null),
            i = n ?? r,
            a = t(),
            { activeLocale: o, setLocale: ee } = T(),
            l = R(),
            {
              style: u,
              className: d,
              layoutId: m,
              variant: h,
              xjFRNW5Ck: _,
              qj9dFm58d: y,
              oYv8ppbKX: x,
              c6lSflApp: C,
              W6N3t8onY: w,
              LQjLsXvXk: E,
              hy9nT4IgJ: O,
              rm7BQEm01: k,
              K3VDJ7McJ: A,
              ...M
            } = Ee(e),
            {
              baseVariant: P,
              classNames: F,
              clearLoadingGesture: z,
              gestureHandlers: B,
              gestureVariant: V,
              isLoading: H,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = j({
              cycleOrder: he,
              defaultVariant: `t8MI3vX_J`,
              ref: i,
              variant: h,
              variantClassNames: _e,
            }),
            q = De(e, K),
            { activeVariantCallback: ie, delay: J } = b(P),
            Y = ie(async (...e) => {
              (W({ isHovered: !0 }), G(`bKZaXGAoG`));
            }),
            X = ie(async (...e) => {
              G(`t8MI3vX_J`);
            }),
            ae = D(ge, re),
            oe = () => P === `bKZaXGAoG`,
            se = Se(O);
          return f(v, {
            id: m ?? a,
            children: f(Te, {
              animate: K,
              initial: !1,
              children: f(Ce, {
                value: ve,
                children: f(te, {
                  clickTrackingId: `click-store-item`,
                  href: x,
                  motionChild: !0,
                  nodeId: `t8MI3vX_J`,
                  scopeId: `kjjwULkIF`,
                  children: f(g.a, {
                    ...M,
                    ...B,
                    className: `${D(ae, `framer-1s3hp6r`, d, F)} framer-to0la`,
                    "data-framer-name": `Video`,
                    "data-highlight": !0,
                    layoutDependency: q,
                    layoutId: `t8MI3vX_J`,
                    onMouseEnter: Y,
                    ref: i,
                    style: { ...u },
                    ...ue({ bKZaXGAoG: { "data-framer-name": `Hover Playing` } }, P, V),
                    children: p(I, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: ne(
                          (l?.y || 0) +
                            0 +
                            (((l?.height || 558) -
                              0 -
                              (Math.max(0, ((l?.height || 558) - 0 - 0) / 1) * 1 + 0)) /
                              2 +
                              0 +
                              0)
                        ),
                        pixelHeight: 1140,
                        pixelWidth: 1140,
                        sizes: l?.width || `100vw`,
                        ...ye(_),
                      },
                      className: `framer-tqhorr`,
                      "data-border": !0,
                      "data-framer-name": `Asset`,
                      draggable: `false`,
                      layoutDependency: q,
                      layoutId: `SXp49eGqa`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(255, 255, 255, 0.1)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        "--corner-shape-fallback": 0.752,
                        borderBottomLeftRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.5)`,
                      },
                      whileHover: be,
                      children: [
                        oe() &&
                          f(N, {
                            children: f(L, {
                              className: `framer-di7vqv-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: q,
                              layoutId: `C4KHiutYw-container`,
                              nodeId: `C4KHiutYw`,
                              rendersWithMotion: !0,
                              scopeId: `kjjwULkIF`,
                              children: f(U, {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: `100%`,
                                id: `C4KHiutYw`,
                                isMixedBorderRadius: !1,
                                layoutId: `C4KHiutYw`,
                                loop: !1,
                                muted: !0,
                                objectFit: `cover`,
                                onEnd: X,
                                playing: !1,
                                poster: xe(_),
                                posterEnabled: !0,
                                srcFile: y,
                                srcType: `Upload`,
                                srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                startTime: 0,
                                style: { height: `100%`, width: `100%` },
                                topLeftRadius: 0,
                                topRightRadius: 0,
                                volume: 25,
                                width: `100%`,
                                ...ue({ bKZaXGAoG: { playing: !0 } }, P, V),
                              }),
                            }),
                          }),
                        p(g.div, {
                          className: `framer-19ms4hb`,
                          layoutDependency: q,
                          layoutId: `w1SL85dba`,
                          children: [
                            k !== !1 &&
                              f(S, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(g.p, {
                                    className: `framer-styles-preset-4eptxb`,
                                    "data-styles-preset": `XHuCPIQKc`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Logo Tee`,
                                  }),
                                }),
                                className: `framer-1pgvy5u`,
                                fonts: [`Inter`],
                                layoutDependency: q,
                                layoutId: `SBHvDkI1n`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: C,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            A !== !1 &&
                              p(g.div, {
                                className: `framer-16cgka7`,
                                layoutDependency: q,
                                layoutId: `odOiJVyqn`,
                                children: [
                                  f(N, {
                                    children: f(L, {
                                      className: `framer-1fo8i6o-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: q,
                                      layoutId: `Hb_DQjTsf-container`,
                                      nodeId: `Hb_DQjTsf`,
                                      rendersWithMotion: !0,
                                      scopeId: `kjjwULkIF`,
                                      children: f(Z, {
                                        canvasPrice: w,
                                        displayPrice: `minimum price`,
                                        format: {
                                          currencyCode: `EUR`,
                                          showCurrency: !1,
                                          showDecimals: `Hide when .00`,
                                          showSymbol: !0,
                                        },
                                        fromText: ``,
                                        height: `100%`,
                                        id: `Hb_DQjTsf`,
                                        layoutId: `Hb_DQjTsf`,
                                        regularColor: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        regularFont: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontFeatureSettings: `'tnum' on`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 500,
                                          letterSpacing: `-0.05em`,
                                          lineHeight: `1em`,
                                        },
                                        saleColor: `rgb(255, 255, 255)`,
                                        saleFont: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 500,
                                          letterSpacing: `-0.05em`,
                                          lineHeight: `1em`,
                                        },
                                        shopifyProductID: E,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  se !== !1 &&
                                    f(N, {
                                      children: f(L, {
                                        className: `framer-zy4xaa-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        layoutDependency: q,
                                        layoutId: `XtkeOlX8D-container`,
                                        nodeId: `XtkeOlX8D`,
                                        rendersWithMotion: !0,
                                        scopeId: `kjjwULkIF`,
                                        style: { opacity: 0.3 },
                                        children: f(Q, {
                                          canvasPrice: O,
                                          color: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          compareAtPrefix: ``,
                                          font: {
                                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                            fontSize: `16px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `-0.05em`,
                                            lineHeight: `1em`,
                                          },
                                          format: {
                                            currencyCode: `EUR`,
                                            showCurrency: !1,
                                            showDecimals: `Hide when .00`,
                                            showSymbol: !0,
                                          },
                                          height: `100%`,
                                          id: `XtkeOlX8D`,
                                          layoutId: `XtkeOlX8D`,
                                          shopifyProductID: E,
                                          strikethrough: !0,
                                          strikethroughColor: `rgb(255, 255, 255)`,
                                          strikethroughSize: 1,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                ],
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
          `.framer-yac9B.framer-to0la, .framer-yac9B .framer-to0la { display: block; }`,
          `.framer-yac9B.framer-1s3hp6r { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 558px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 499px; }`,
          `.framer-yac9B .framer-tqhorr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; pointer-events: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-yac9B .framer-di7vqv-container { flex: none; height: 100%; pointer-events: none; position: relative; width: 100%; }`,
          `.framer-yac9B .framer-19ms4hb { align-content: center; align-items: center; bottom: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; left: 20px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 20px; z-index: 1; }`,
          `.framer-yac9B .framer-1pgvy5u { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-yac9B .framer-16cgka7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-yac9B .framer-1fo8i6o-container, .framer-yac9B .framer-zy4xaa-container { flex: none; height: auto; position: relative; width: auto; }`,
          ...V,
          `.framer-yac9B[data-border="true"]::after, .framer-yac9B [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-yac9B`
      )),
      ($.displayName = `Card`),
      ($.defaultProps = { height: 558, width: 499 }),
      C($, {
        variant: {
          options: [`t8MI3vX_J`, `bKZaXGAoG`],
          optionTitles: [`Video`, `Hover Playing`],
          title: `Variant`,
          type: k.Enum,
        },
        xjFRNW5Ck: {
          __defaultAssetReference: `data:framer/asset-reference,H6Iqr9r1DN2MMd7UDJvGW1Sx47Y.png?originalFilename=sweatshirt-poster.png&width=1140&height=1140`,
          description: `Also a poster if video is used`,
          title: `Poster`,
          type: k.ResponsiveImage,
        },
        qj9dFm58d: me?.srcFile && {
          ...me.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,LaC4X3gYkkb72yaHTbMyHOW9qk.mp4?originalFilename=framer_merch_sweater-spin_r2_3840x3840_pro-res.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video`,
        },
        onqj9dFm58dChange: { changes: `qj9dFm58d`, type: k.ChangeHandler },
        oYv8ppbKX: { title: `Link`, type: k.Link },
        c6lSflApp: { defaultValue: `Logo Tee`, displayTextArea: !1, title: `Name`, type: k.String },
        onc6lSflAppChange: { changes: `c6lSflApp`, type: k.ChangeHandler },
        W6N3t8onY: { defaultValue: `50`, displayTextArea: !1, title: `Price`, type: k.String },
        onW6N3t8onYChange: { changes: `W6N3t8onY`, type: k.ChangeHandler },
        LQjLsXvXk: { defaultValue: `9989927764301`, title: `Product ID`, type: k.String },
        onLQjLsXvXkChange: { changes: `LQjLsXvXk`, type: k.ChangeHandler },
        hy9nT4IgJ: { defaultValue: `29.00`, title: `Compare`, type: k.String },
        onhy9nT4IgJChange: { changes: `hy9nT4IgJ`, type: k.ChangeHandler },
        rm7BQEm01: { defaultValue: !0, title: `Title`, type: k.Boolean },
        onrm7BQEm01Change: { changes: `rm7BQEm01`, type: k.ChangeHandler },
        K3VDJ7McJ: { defaultValue: !0, title: `Price 2`, type: k.Boolean },
        onK3VDJ7McJChange: { changes: `K3VDJ7McJ`, type: k.ChangeHandler },
      }),
      x(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...de,
          ...fe,
          ...pe,
          ...A(B),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Z as a, le as i, Oe as n, oe as o, Q as r, $ as t };
//# sourceMappingURL=kjjwULkIF.C-GonJKc.mjs.map
