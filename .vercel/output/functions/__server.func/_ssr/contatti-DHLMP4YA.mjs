import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteShell, r as PageHero } from "./site-shell-Ci8L41W0.mjs";
import { t as ContactForm } from "./contact-form-BDfZRaFo.mjs";
import { r as company } from "./router-BnHE6j-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contatti-DHLMP4YA.js
var import_jsx_runtime = require_jsx_runtime();
function Contatti() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Contatti",
			title: "Parliamone in cantiere, o da qui.",
			lead: "Sopralluogo gratuito a Lissone e in Brianza. Telefono, WhatsApp o il modulo: vi rispondiamo in orario di ufficio."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium",
						children: "Sede"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "mt-4 not-italic leading-relaxed text-muted",
						children: [
							company.legalName,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							company.address,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							company.zip,
							" ",
							company.city,
							" (",
							company.province,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-3 text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-[0.18em] uppercase text-muted",
								children: "Telefono"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.phoneHref,
								className: "font-medium hover:text-primary",
								children: company.phone
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-[0.18em] uppercase text-muted",
								children: "Cellulare / WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.whatsapp,
								className: "font-medium hover:text-primary",
								children: company.mobile
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-[0.18em] uppercase text-muted",
								children: "PEC"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.pecHref,
								className: "font-medium hover:text-primary",
								children: company.pec
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-muted",
						children: [
							"P. IVA ",
							company.vat,
							" · REA ",
							company.rea
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: company.maps,
						className: "mt-6 inline-block text-sm font-medium text-primary hover:opacity-80",
						target: "_blank",
						rel: "noreferrer",
						children: "Apri in Google Maps"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-5 py-10 md:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Mappa — P.S.C. Edilizia Moderna, Lissone",
						src: company.osmEmbed,
						className: "h-80 w-full border-0 md:h-[28rem]",
						loading: "lazy"
					})
				})
			})
		})
	] });
}
//#endregion
export { Contatti as component };
