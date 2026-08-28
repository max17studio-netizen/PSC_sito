import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as SiteShell, n as CtaBand, r as PageHero } from "./site-shell-Ci8L41W0.mjs";
import { s as services } from "./router-BnHE6j-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servizi-77jn6_Ol.js
var import_jsx_runtime = require_jsx_runtime();
function Servizi() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Servizi",
			title: "Tutto quello che serve per chiudere un cantiere.",
			lead: "Ristrutturazioni, costruzioni, isolamenti, impianti, infissi, facciate e pratiche. Un’unica impresa, a Lissone."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/servizi/$slug",
					params: { slug: s.slug },
					className: "group grid overflow-hidden rounded-xl bg-surface sm:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: "",
							className: "h-48 w-full object-cover sm:h-full"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between p-6 sm:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-medium md:text-3xl",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: s.lead
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary",
							children: ["Approfondisci ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					})]
				}, s.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Servizi as component };
