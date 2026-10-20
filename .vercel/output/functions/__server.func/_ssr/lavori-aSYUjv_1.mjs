import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteShell, n as CtaBand, r as PageHero } from "./site-shell-BjwGOp8u.mjs";
import { o as projects } from "./router-BlGSicby.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lavori-aSYUjv_1.js
var import_jsx_runtime = require_jsx_runtime();
function Lavori() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Lavori",
			title: "Cantiere chiuso, casa abitata.",
			lead: "Una selezione di interventi residenziali in Lissone e Brianza: ville, appartamenti, facciate e recuperi di sottotetto."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-x-8 gap-y-14 md:grid-cols-2",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: i === 0 ? "md:col-span-2" : void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: `${p.title} a ${p.place}`,
							className: i === 0 ? "aspect-[16/9] w-full rounded-xl object-cover" : "aspect-[4/3] w-full rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-medium",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-[0.18em] uppercase text-muted",
								children: [
									p.place,
									" · ",
									p.year
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-primary",
							children: p.type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl leading-relaxed text-muted",
							children: p.summary
						})
					]
				}, p.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Lavori as component };
