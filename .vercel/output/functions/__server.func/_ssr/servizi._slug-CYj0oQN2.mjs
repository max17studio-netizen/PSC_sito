import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteShell, t as Button } from "./site-shell-Ci8L41W0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servizi._slug-CYj0oQN2.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-6xl px-5 py-32",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "Servizio non trovato."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "outline",
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/servizi",
			children: "Torna ai servizi"
		})
	})]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
