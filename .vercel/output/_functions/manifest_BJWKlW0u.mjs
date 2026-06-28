import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_BfV8gsOu.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B7CUssiO.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/vk/Documents/vkaidun-net/","cacheDir":"file:///Users/vk/Documents/vkaidun-net/node_modules/.astro/","outDir":"file:///Users/vk/Documents/vkaidun-net/dist/","srcDir":"file:///Users/vk/Documents/vkaidun-net/src/","publicDir":"file:///Users/vk/Documents/vkaidun-net/public/","buildClientDir":"file:///Users/vk/Documents/vkaidun-net/dist/client/","buildServerDir":"file:///Users/vk/Documents/vkaidun-net/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-sckkx6r4],[data-astro-cid-sckkx6r4]:before,[data-astro-cid-sckkx6r4]:after{box-sizing:border-box;margin:0;padding:0}:root{--bg: #0f0f0f;--text: #f0ede8;--muted: #888;--accent: #e8e0d4;--border: #2a2a2a;--card-bg: #1a1a1a;--font: \"Inter\", system-ui, sans-serif}html{background:var(--bg);color:var(--text);font-family:var(--font);line-height:1.6}body{min-height:100vh}header[data-astro-cid-j7pv25f6]{display:flex;justify-content:space-between;align-items:center;padding:1.5rem 2rem;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--bg);z-index:10}.logo[data-astro-cid-j7pv25f6]{font-weight:600;font-size:1.1rem;text-decoration:none;color:var(--text);letter-spacing:.02em}main[data-astro-cid-j7pv25f6]{max-width:900px;margin:0 auto;padding:0 2rem}.hero[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:200px 1fr;gap:3rem;align-items:center;padding:5rem 0 4rem}.hero-photo[data-astro-cid-j7pv25f6]{width:200px;height:200px;border-radius:50%;background:var(--card-bg);overflow:hidden}.hero-photo[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{width:100%;height:100%;object-fit:cover;display:block}.hero[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6]{font-size:1.8rem;font-weight:700;line-height:1.3;margin-bottom:1rem;color:var(--text)}.hero[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{color:var(--muted);font-size:1.05rem;margin-bottom:1.5rem}.social-links[data-astro-cid-j7pv25f6]{display:flex;gap:1rem;flex-wrap:wrap}.social-links[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{color:var(--text);text-decoration:none;border:1px solid var(--border);padding:.4rem 1rem;border-radius:2rem;font-size:.9rem;transition:border-color .2s}.social-links[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]:hover{border-color:var(--accent)}.services[data-astro-cid-j7pv25f6]{padding:4rem 0;border-top:1px solid var(--border)}.services[data-astro-cid-j7pv25f6] h2[data-astro-cid-j7pv25f6],.how-it-works[data-astro-cid-j7pv25f6] h2[data-astro-cid-j7pv25f6]{font-size:1.5rem;font-weight:600;margin-bottom:2rem;color:var(--accent)}.services-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.5rem}.service-card[data-astro-cid-j7pv25f6]{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:1.5rem}.service-card[data-astro-cid-j7pv25f6] h3[data-astro-cid-j7pv25f6]{font-size:1rem;font-weight:600;margin-bottom:.5rem;color:var(--text)}.service-card[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{color:var(--muted);font-size:.9rem;line-height:1.5}.how-it-works[data-astro-cid-j7pv25f6]{padding:4rem 0;border-top:1px solid var(--border)}.how-it-works[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{color:var(--muted);font-size:1.05rem;max-width:640px;line-height:1.7}.contact[data-astro-cid-j7pv25f6]{padding:4rem 0;border-top:1px solid var(--border);text-align:center;display:flex;flex-direction:column;align-items:center;gap:2rem}.charity[data-astro-cid-j7pv25f6]{color:var(--muted);font-size:1rem}.contact-btn[data-astro-cid-j7pv25f6]{display:inline-block;background:var(--text);color:var(--bg);text-decoration:none;padding:.8rem 2rem;border-radius:2rem;font-weight:600;font-size:1rem;transition:opacity .2s}.contact-btn[data-astro-cid-j7pv25f6]:hover{opacity:.85}footer[data-astro-cid-j7pv25f6]{border-top:1px solid var(--border);padding:2rem;text-align:center;color:var(--muted);font-size:.85rem}@media(max-width:640px){.hero[data-astro-cid-j7pv25f6]{grid-template-columns:1fr;text-align:center;padding:3rem 0 2rem}.hero-photo[data-astro-cid-j7pv25f6]{margin:0 auto}.social-links[data-astro-cid-j7pv25f6]{justify-content:center}.hero[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6]{font-size:1.4rem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/vk/Documents/vkaidun-net/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BJWKlW0u.mjs","/Users/vk/Documents/vkaidun-net/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C2NDzKFV.mjs","/Users/vk/Documents/vkaidun-net/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.yX_rbBHb.js","@astrojs/react/client.js":"_astro/client.Bjmg7z1m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.ico","/favicon.svg","/_astro/client.Bjmg7z1m.js","/_astro/index.BcRtWIxf.js","/_astro/keystatic-page.yX_rbBHb.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"fbOCMFk4pMjq5NEhBO1bBZWj3QS02QKI/scGE+G/C1s="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
