import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  C as t,
  D as n,
  F as r,
  I as i,
  L as a,
  M as o,
  N as s,
  T as c,
  a as l,
  d as u,
  g as d,
  i as f,
  n as p,
  r as m,
  t as h,
  v as g,
  x as _,
  y as v,
} from "./react.BKyTRiZ3.mjs";
import {
  B as y,
  F as b,
  G as x,
  H as S,
  I as C,
  J as w,
  K as T,
  L as E,
  R as D,
  U as O,
  Z as k,
  at as A,
  c as j,
  d as M,
  dt as N,
  i as P,
  nt as F,
  o as I,
  u as L,
  ut as R,
} from "./framer.CfbrMSxG.mjs";
async function z({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: r,
  localeId: i,
  collectionItemId: o,
  contentLocaleId: l,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  let m = H[e].page.preload();
  (T({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    x(K));
  let h = u(L, {
    children: u(I, {
      children: u(M, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: r,
        routes: H,
        collectionUtils: W,
        serverDatabaseClient: G,
        framerSiteId: K,
        notFoundPage: D(() => import(`./SitesNotFoundPage.js@1.4.2s9EULIZ.mjs`)),
        isReducedMotion: void 0,
        localeId: i,
        locales: U,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://oksanarusinova.framer.website`,
        EditorBar:
          a === void 0
            ? void 0
            : (() => {
                if (J) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return D(async () => {
                  a.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: k, useLocaleInfo: F, useRouter: A },
                    react: {
                      createElement: u,
                      Fragment: s,
                      memo: _,
                      useCallback: n,
                      useEffect: g,
                      useRef: v,
                      useState: d,
                      useLayoutEffect: c,
                    },
                    "react-dom": { createPortal: f },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        loadSnippetsModule: new j(
          () => import("./HbwEcXFkrkIia0acVtP_HuhhIjTg_hRaNBLiffqZuno.dObCGW41.mjs")
        ),
        initialCollectionItemId: o,
        initialContentLocaleIdOverride: l,
      }),
    }),
    value: { routes: {} },
  });
  return (await m, h);
}
function B() {
  q && a.__framer_events.push(arguments);
}
async function V(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || a.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    B(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, s, c, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (i = d.localeId),
        (s = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = S(H, r)));
    else {
      S(H, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = b(H, decodeURIComponent(location.pathname), !0, U);
        ((r = e.routeId), (i = e.localeId), (c = e.pathVariables));
      }
    }
    let f = z({
      routeId: r,
      localeId: i,
      contentLocaleId: s,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    a !== void 0 &&
      (async () => {
        let e = H[r],
          t = U.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && W) {
          let r = await W[e.collectionId]?.(),
            [i] = Object.values(c);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          s = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          a.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: K,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: a.location.href,
              hostname: a.location.hostname || null,
              pathname: a.location.pathname || null,
              hash: a.location.hash || null,
              search: a.location.search || null,
              timezone: s,
              locale: l,
            },
            `eager`,
          ]),
          await N({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (R(`framer-rewrite-breakpoints`, () => {
          (O(u), a.__framer_onRewriteBreakpoints?.(u));
        }),
        (J ? (e) => e() : o)(() => {
          (y(), w(), h(t, p, { onRecoverableError: n }));
        }))
      : m(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var H, U, W, G, K, q, J;
e(() => {
  if (
    (r(),
    E(),
    t(),
    l(),
    p(),
    (H = {
      augiA20Il: {
        elements: {},
        page: D(() => import("./1h0keSPH7UAN-0CfpOzDOYaF2zCJ2M4tFTcYgFyKKQo.BsFveIvw.mjs")),
        path: `/`,
      },
      Y4OqO87uw: {
        elements: {},
        page: D(() => import("./GPDcc5GFwhS0UgQE3IQRpJzTbuV9gNEaGG7WKkoaNug.DwXUSVVZ.mjs")),
        path: `/ru/home`,
      },
      Yk0caFFXD: {
        elements: {},
        page: D(() => import("./ZixTofmQRhB2Ko2GmAkyHQepwJwZuQETSWRoVlkADQ0.ClR5oijP.mjs")),
        path: `/portfolio`,
      },
      v0NP7rg_A: {
        elements: {},
        page: D(() => import("./Rrx6EsMslnUlWfzKmhM_dyp-ysWmRBhNq-5DikVQLmE.BAUZ0tXk.mjs")),
        path: `/ru/portfolio-2`,
      },
      oe1CZFKp_: {
        elements: { GUo93gOQe: `research`, TN_9sjLMV: `prototype` },
        page: D(() => import("./AD299xVsqQK_uKLv5G5IvmGbYAtY-G_U1m4S4qSM2aI.CccfJtVl.mjs")),
        path: `/portfolio/connecthub`,
      },
      aQL_eOTAm: {
        elements: { LzK9Rer8f: `research-1`, mEW_aRsFW: `research`, XnacIMfmh: `prototype` },
        page: D(() => import("./FL-_LY07GRkq-BrxJP2MiKiOcti1MURdMqVg7pXXS_E.DbVS9M4g.mjs")),
        path: `/old/connecthub-2`,
      },
      jFBc0bflX: {
        elements: {
          CXicQXHyJ: `research-map`,
          iKWTngtWU: `prototype`,
          sEeKPetuQ: `research`,
          WCKLuUHte: `research-1`,
        },
        page: D(() => import("./2GNSjJbYWFrMdF446JuLTO_z2NAcpRHbsed7CdqNt-Y.Dqyr9u4T.mjs")),
        path: `/old/mappingtool-2`,
      },
      ccThq1ZNn: {
        elements: { A6O3LzhzJ: `research-map`, MWWGEnItL: `prototype` },
        page: D(() => import("./mcc9wF6QLS85jjvWuWdw-EMVRQOq5P965_AS7jRQTfY.iepspAuR.mjs")),
        path: `/portfolio/mappingtool`,
      },
      TQ2_bezBK: {
        elements: { eMAnFFwqX: `research`, vnCqcB2zw: `prototype` },
        page: D(() => import("./uKD8jw11MHdVR5YDRgViqe-I4Vtu_2O-CXy5ZLodrJI.BUMYsErp.mjs")),
        path: `/portfolio/dfd`,
      },
      pVjAhsh5N: {
        elements: { N2qrz6sgb: `research`, PXDWSVpoO: `prototype` },
        page: D(() => import("./TnWaFROKCaf5CDTF3jMu4n3iRcfyT0Z_n8nzm3qem8U.q0jaI7Ds.mjs")),
        path: `/old/dfd-2`,
      },
      wcki3OcY_: {
        elements: { E_6yIy1Lz: `prototype`, qGiz83ySR: `research` },
        page: D(() => import("./qZhdh5dGTAyqXbhVeIPqg3yG_5uSWTuW43MCSL-_Tjc.CxsIewsV.mjs")),
        path: `/portfolio/enrollments`,
      },
      CuKpzzXMb: {
        elements: { LVMJdOstt: `research2`, vCiuHYrzF: `naviagtion` },
        page: D(() => import("./NrSGayWV27EZ0RnkHQ87Jo1s8GKZJx4yT7rDXTLYY8M.DESXF-m0.mjs")),
        path: `/old/enrollments-2`,
      },
      J0eMRLTAj: {
        elements: {},
        page: D(() => import("./517e3qRDHqQH9T1TutASnOHvyTbmRP2hwQHb_jRjiWE.KD-JO5-E.mjs")),
        path: `/portfolio/rts`,
      },
      Q70j7ZVMn: {
        elements: { SOKv0e65U: `основные-макеты` },
        page: D(() => import("./DlmHCYZldd-rBwdiCGtJd2Mgoyv2HKOlQYQI9TS-3dA.Cbl7RW9S.mjs")),
        path: `/old/rts-2`,
      },
      yNWqB1Ufr: {
        elements: { GdZGCtzTE: `основные-макеты`, Lv6ixVkCA: `prototype`, P0XnJztSj: `research` },
        page: D(() => import("./ie17JugmH3_wiLEc8d8eToWERvh7_kbFT4r2Sx8N5bo.CeNaDLub.mjs")),
        path: `/ru/portfolio-2/connecthub`,
      },
      AgTyDC1r5: {
        elements: { Jf7JPLKX3: `naviagtion`, Y82j_iKWi: `research2`, ytp6B3a5C: `основные-макеты` },
        page: D(() => import("./8wEo9sK1bK0HWLPgh009uPJwaPiEV-EwygB7SZoJlDM.CyAebDcj.mjs")),
        path: `/ru/portfolio-2/enrollments`,
      },
      TfvKxublX: {
        elements: { nM2MZHuLN: `основные-макеты` },
        page: D(() => import("./nIc6aDCNJUGmJcR55FWWV84-NndZQtJ8Gr3Y2HUWae8.dI2C2QWl.mjs")),
        path: `/ru/portfolio-2/rts`,
      },
      QijvxGXqd: {
        elements: { b6BP89ahK: `research`, UmUuJMeaU: `prototype` },
        page: D(() => import("./_wQTsha8l8gey7ML3g1rCpjantzUl55zVVG3O6QpqJQ.BhUpdM17.mjs")),
        path: `/ru/portfolio-2/dfd`,
      },
      ZZVh6lBF_: {
        elements: {
          dqEfO62Pw: `research`,
          iF0dDDRNs: `research-map`,
          rsR6_uufE: `research-1`,
          v0DfLnpOZ: `prototype`,
        },
        page: D(() => import("./sgogaNqGk2ee9n9cSmV_TZ8jiGT7oRrIRprzfG2Bqws.BlEVuJTN.mjs")),
        path: `/ru/portfolio-2/mappingtool`,
      },
    }),
    (U = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (W = {}),
    (G = void 0),
    (K = `1521dca80675267bb60d80f9a4f2cc19e4bff8ad9a9e8e17f4c75317c2b837df`),
    (q = typeof document < `u`),
    (J = q && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(i.userAgent)),
    q)
  ) {
    ((a.__framer_importFromPackage = (e, t) => () =>
      u(P, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (a.__framer_events = a.__framer_events || []),
      C());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? V(!0, e) : V(!1, e);
  }
})();
export { z as getPageRoot };
//# sourceMappingURL=script_main.C83U0efb.mjs.map
