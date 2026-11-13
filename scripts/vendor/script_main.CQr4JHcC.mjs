import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
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
} from "./react.B4lOa1lM.mjs";
import {
  F as y,
  G as b,
  H as x,
  I as S,
  J as C,
  K as w,
  N as T,
  P as E,
  R as D,
  U as O,
  V as k,
  Z as A,
  at as j,
  c as M,
  d as N,
  dt as P,
  i as F,
  nt as I,
  o as L,
  u as R,
  ut as z,
  z as B,
} from "./framer.DkH54azp.mjs";
function V({ routeId: e, pathVariables: t, localeId: n }) {
  return (
    (Q ??= O({
      routes: G,
      routeId: e,
      pathVariables: t,
      localeId: n,
      locales: K,
      collectionUtils: q,
    })),
    Q
  );
}
async function H({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: r,
  localeId: i,
  collectionItemId: o,
  contentLocaleId: l,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  (w({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    b(Y));
  let m = G[e].page.preload(),
    h = G[e];
  if (p && o === void 0 && h.collectionId) {
    let n = await V({ routeId: e, pathVariables: t, localeId: i });
    ((l ??= n.contentLocaleId), (r ??= n.canonicalPathVariables));
  }
  let y = u(N, {
      isWebsite: !0,
      environment: `site`,
      routeId: e,
      pathVariables: t,
      canonicalPathVariables: r,
      routes: G,
      collectionUtils: q,
      serverDatabaseClient: J,
      framerSiteId: Y,
      notFoundPage: S(() => import(`./SitesNotFoundPage.js@1.4.BeK0FbIi.mjs`)),
      isReducedMotion: void 0,
      localeId: i,
      locales: K,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://oksanarusinova.framer.website`,
      EditorBar:
        a === void 0
          ? void 0
          : (() => {
              if (Z) console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
              else
                return S(async () => {
                  a.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: A, useLocaleInfo: I, useRouter: j },
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
      loadSnippetsModule: new M(
        () => import("./HbwEcXFkrkIia0acVtP_HuhhIjTg_hRaNBLiffqZuno.U1APg39v.mjs")
      ),
      initialCollectionItemId: o,
      initialContentLocaleIdOverride: l,
    }),
    x = u(L, { children: y }),
    C = u(R, { children: x, value: { routes: {} } });
  return (await m, C);
}
function U() {
  X && a.__framer_events.push(arguments);
}
async function W(e, t) {
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
    U(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
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
        (r = k(G, r)));
    else {
      k(G, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = T(G, decodeURIComponent(location.pathname), !0, K);
        ((r = e.routeId), (i = e.localeId), (c = e.pathVariables));
      }
    }
    let f = H({
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
        let e = G[r],
          t = K.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n;
        n =
          d?.collectionItemId === void 0
            ? e?.collectionId
              ? await (
                  await V({ routeId: r, pathVariables: c, localeId: i })
                ).collectionItemId
              : null
            : d.collectionItemId;
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
              framerSiteId: Y,
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
          await P({
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
      ? (z(`framer-rewrite-breakpoints`, () => {
          (x(u), a.__framer_onRewriteBreakpoints?.(u));
        }),
        (Z ? (e) => e() : o)(() => {
          (B(), C(), h(t, p, { onRecoverableError: n }));
        }))
      : (await D(), m(t, { onRecoverableError: n }).render(p));
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    if (
      (r(),
      y(),
      t(),
      l(),
      p(),
      (G = {
        augiA20Il: {
          elements: {},
          page: S(() => import("./qvqoqEgUxDrhbYP2yQrTgQh_bMryabjZ-zsuzZNu8dM.BB4uOGvs.mjs")),
          path: `/`,
        },
        Y4OqO87uw: {
          elements: {},
          page: S(() => import("./BDpdvQY7HqxtwpjC1IkTNpkeB2bcK2Y-FiKbvLe734Y.DkE1q0Zk.mjs")),
          path: `/ru/home`,
        },
        Yk0caFFXD: {
          elements: {},
          page: S(() => import("./ZixTofmQRhB2Ko2GmAkyHQepwJwZuQETSWRoVlkADQ0.C1FUGyAa.mjs")),
          path: `/portfolio`,
        },
        v0NP7rg_A: {
          elements: {},
          page: S(() => import("./85h_7_WhCxH8ySppZY8eUhlwNwLGP7LSogsJSSVYD8Q.B6gwkTWE.mjs")),
          path: `/ru/portfolio-2`,
        },
        oe1CZFKp_: {
          elements: { GUo93gOQe: `research`, TN_9sjLMV: `prototype` },
          page: S(() => import("./AD299xVsqQK_uKLv5G5IvmGbYAtY-G_U1m4S4qSM2aI.BpRHl6z2.mjs")),
          path: `/portfolio/connecthub`,
        },
        aQL_eOTAm: {
          elements: { LzK9Rer8f: `research-1`, mEW_aRsFW: `research`, XnacIMfmh: `prototype` },
          page: S(() => import("./FL-_LY07GRkq-BrxJP2MiKiOcti1MURdMqVg7pXXS_E.C7N7s5Ea.mjs")),
          path: `/old/connecthub-2`,
        },
        jFBc0bflX: {
          elements: {
            CXicQXHyJ: `research-map`,
            iKWTngtWU: `prototype`,
            sEeKPetuQ: `research`,
            WCKLuUHte: `research-1`,
          },
          page: S(() => import("./2GNSjJbYWFrMdF446JuLTO_z2NAcpRHbsed7CdqNt-Y.xkYWCzis.mjs")),
          path: `/old/mappingtool-2`,
        },
        ccThq1ZNn: {
          elements: { A6O3LzhzJ: `research-map`, MWWGEnItL: `prototype` },
          page: S(() => import("./mcc9wF6QLS85jjvWuWdw-EMVRQOq5P965_AS7jRQTfY.CyIOvvcV.mjs")),
          path: `/portfolio/mappingtool`,
        },
        TQ2_bezBK: {
          elements: { eMAnFFwqX: `research`, vnCqcB2zw: `prototype` },
          page: S(() => import("./uKD8jw11MHdVR5YDRgViqe-I4Vtu_2O-CXy5ZLodrJI.DoIuLSIk.mjs")),
          path: `/portfolio/dfd`,
        },
        pVjAhsh5N: {
          elements: { N2qrz6sgb: `research`, PXDWSVpoO: `prototype` },
          page: S(() => import("./TnWaFROKCaf5CDTF3jMu4n3iRcfyT0Z_n8nzm3qem8U.B1KGQCQT.mjs")),
          path: `/old/dfd-2`,
        },
        wcki3OcY_: {
          elements: { E_6yIy1Lz: `prototype`, qGiz83ySR: `research` },
          page: S(() => import("./qZhdh5dGTAyqXbhVeIPqg3yG_5uSWTuW43MCSL-_Tjc.D1QW2cm0.mjs")),
          path: `/portfolio/enrollments`,
        },
        CuKpzzXMb: {
          elements: { LVMJdOstt: `research2`, vCiuHYrzF: `naviagtion` },
          page: S(() => import("./NrSGayWV27EZ0RnkHQ87Jo1s8GKZJx4yT7rDXTLYY8M.CWHFFvcE.mjs")),
          path: `/old/enrollments-2`,
        },
        J0eMRLTAj: {
          elements: {},
          page: S(() => import("./517e3qRDHqQH9T1TutASnOHvyTbmRP2hwQHb_jRjiWE.B2jK4lZh.mjs")),
          path: `/portfolio/rts`,
        },
        Q70j7ZVMn: {
          elements: { SOKv0e65U: `основные-макеты` },
          page: S(() => import("./DlmHCYZldd-rBwdiCGtJd2Mgoyv2HKOlQYQI9TS-3dA.CnEBwM8y.mjs")),
          path: `/old/rts-2`,
        },
        yNWqB1Ufr: {
          elements: { GdZGCtzTE: `основные-макеты`, Lv6ixVkCA: `prototype`, P0XnJztSj: `research` },
          page: S(() => import("./fnRJprMTG40qiF4rxf86LPN2doMyCv7SdB0VOLPvAok.CWjsoYoI.mjs")),
          path: `/ru/portfolio-2/connecthub`,
        },
        AgTyDC1r5: {
          elements: {
            Jf7JPLKX3: `naviagtion`,
            Y82j_iKWi: `research2`,
            ytp6B3a5C: `основные-макеты`,
          },
          page: S(() => import("./gvRhvG9H9HDD1Pu7eFYgcXwfmhTTYmnvaTZ4PkcZxac.DaIQwbBJ.mjs")),
          path: `/ru/portfolio-2/enrollments`,
        },
        TfvKxublX: {
          elements: { nM2MZHuLN: `основные-макеты` },
          page: S(() => import("./nIc6aDCNJUGmJcR55FWWV84-NndZQtJ8Gr3Y2HUWae8.nH_kio_s.mjs")),
          path: `/ru/portfolio-2/rts`,
        },
        QijvxGXqd: {
          elements: { b6BP89ahK: `research`, UmUuJMeaU: `prototype` },
          page: S(() => import("./_wQTsha8l8gey7ML3g1rCpjantzUl55zVVG3O6QpqJQ.DthdjwRt.mjs")),
          path: `/ru/portfolio-2/dfd`,
        },
        ZZVh6lBF_: {
          elements: {
            dqEfO62Pw: `research`,
            iF0dDDRNs: `research-map`,
            rsR6_uufE: `research-1`,
            v0DfLnpOZ: `prototype`,
          },
          page: S(() => import("./sgogaNqGk2ee9n9cSmV_TZ8jiGT7oRrIRprzfG2Bqws.DeqJor7z.mjs")),
          path: `/ru/portfolio-2/mappingtool`,
        },
        SXvR85UdE: {
          elements: {},
          page: S(() => import("./-keYaijN6WArn4cqudv-mRy2QMXtg4dIX16SfR08gYI.BuWN3EKG.mjs")),
          path: `/ru/pdf`,
        },
        QTvFjcQ1S: {
          elements: {},
          page: S(() => import("./0XqKOoAeu6vDE_2yduM50qhJHGWKy38ZUO6C_egPbfQ._hOnVuHf.mjs")),
          path: `/pdf`,
        },
      }),
      (K = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
      (q = {}),
      (J = void 0),
      (Y = `1521dca80675267bb60d80f9a4f2cc19e4bff8ad9a9e8e17f4c75317c2b837df`),
      (X = typeof document < `u`),
      (Z = X && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(i.userAgent)),
      X)
    ) {
      ((a.__framer_importFromPackage = (e, t) => () =>
        u(F, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
        (a.__framer_events = a.__framer_events || []),
        E());
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? W(!0, e) : W(!1, e);
    }
  }))();
}
$();
export { H as getPageRoot };
//# sourceMappingURL=script_main.CQr4JHcC.mjs.map
