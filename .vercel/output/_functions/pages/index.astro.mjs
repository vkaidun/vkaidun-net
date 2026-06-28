import { c as createComponent, l as renderHead, n as renderSlot, a as renderTemplate, i as createAstro, r as renderComponent, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BfV8gsOu.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { createReader } from '@keystatic/core/reader';
import { k as keystaticConfig } from '../chunks/keystatic.config_D3qb-wSF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Vova Kaidun \u2014 Games Consultant" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Design Director at Wargaming & Games Consultant"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/vk/Documents/vkaidun-net/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), keystaticConfig);
  const hero = await reader.singletons.hero.read();
  const services = await reader.singletons.services.read();
  const howItWorks = await reader.singletons.howItWorks.read();
  const footer = await reader.singletons.footer.read();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-j7pv25f6> <a href="/" class="logo" data-astro-cid-j7pv25f6>vkaidun</a> </header> <main data-astro-cid-j7pv25f6> <section class="hero" data-astro-cid-j7pv25f6> <div class="hero-photo" data-astro-cid-j7pv25f6> <img src="/images/vova.jpg" alt="Vova Kaidun" data-astro-cid-j7pv25f6> </div> <div class="hero-text" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${hero?.title}</h1> <p data-astro-cid-j7pv25f6>${hero?.description}</p> <div class="social-links" data-astro-cid-j7pv25f6> ${hero?.linkedinUrl && renderTemplate`<a${addAttribute(hero.linkedinUrl, "href")} target="_blank" rel="noopener" data-astro-cid-j7pv25f6>LinkedIn</a>`} ${hero?.portfolioUrl && renderTemplate`<a${addAttribute(hero.portfolioUrl, "href")} target="_blank" rel="noopener" data-astro-cid-j7pv25f6>Portfolio</a>`} ${hero?.behanceUrl && renderTemplate`<a${addAttribute(hero.behanceUrl, "href")} target="_blank" rel="noopener" data-astro-cid-j7pv25f6>Behance</a>`} </div> </div> </section> <section class="services" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>${services?.sectionTitle}</h2> <div class="services-grid" data-astro-cid-j7pv25f6> ${services?.items.map((item) => renderTemplate`<div class="service-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${item.title}</h3> <p data-astro-cid-j7pv25f6>${item.description}</p> </div>`)} </div> </section> <section class="how-it-works" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>${howItWorks?.sectionTitle}</h2> <p data-astro-cid-j7pv25f6>${howItWorks?.content}</p> </section> <section class="contact" data-astro-cid-j7pv25f6> <p class="charity" data-astro-cid-j7pv25f6>${footer?.charityText}</p> <a${addAttribute(`mailto:${footer?.contactEmail}`, "href")} class="contact-btn" data-astro-cid-j7pv25f6>Get in touch</a> </section> </main> <footer data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>© ${(/* @__PURE__ */ new Date()).getFullYear()} Vova Kaidun</span> </footer> ` })} `;
}, "/Users/vk/Documents/vkaidun-net/src/pages/index.astro", void 0);

const $$file = "/Users/vk/Documents/vkaidun-net/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
