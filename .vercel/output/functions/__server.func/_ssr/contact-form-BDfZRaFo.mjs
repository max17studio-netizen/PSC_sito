import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cn, t as Button } from "./site-shell-Ci8L41W0.mjs";
import { s as services } from "./router-BnHE6j-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-form-BDfZRaFo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-paper px-3.5 text-base text-fg outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-sm font-medium text-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-lg border border-border bg-paper px-3.5 py-3 text-base text-fg outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20", className),
		...props
	});
}
var STORAGE_KEY = "psc-preventivi";
function ContactForm({ defaultService = "" }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		setError("");
		const data = new FormData(e.currentTarget);
		const payload = {
			nome: String(data.get("nome") ?? "").trim(),
			telefono: String(data.get("telefono") ?? "").trim(),
			email: String(data.get("email") ?? "").trim(),
			comune: String(data.get("comune") ?? "").trim(),
			servizio: String(data.get("servizio") ?? "").trim(),
			messaggio: String(data.get("messaggio") ?? "").trim(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (!payload.nome || !payload.telefono || !payload.messaggio) {
			setError("Compilate nome, telefono e una breve descrizione del lavoro.");
			return;
		}
		if (!data.get("privacy")) {
			setError("Per inviare la richiesta occorre accettare il trattamento dei dati.");
			return;
		}
		try {
			const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([payload, ...prev].slice(0, 20)));
		} catch {}
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface px-6 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.22em] uppercase text-primary",
				children: "Richiesta inviata"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-3xl font-medium",
				children: "Grazie, vi ricontattiamo a breve."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "Abbiamo registrato la vostra richiesta. Per urgenze potete chiamare o scrivere su WhatsApp: rispondiamo in orario di ufficio."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-5",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nome e cognome",
						htmlFor: "nome",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "nome",
							name: "nome",
							autoComplete: "name",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Telefono",
						htmlFor: "telefono",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "telefono",
							name: "telefono",
							type: "tel",
							autoComplete: "tel",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						htmlFor: "email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Comune dell’immobile",
						htmlFor: "comune",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "comune",
							name: "comune",
							placeholder: "Lissone, Monza…"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Tipo di lavoro",
				htmlFor: "servizio",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "servizio",
					name: "servizio",
					defaultValue: defaultService,
					className: "h-11 w-full rounded-md border border-border bg-paper px-3.5 text-base text-fg outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Selezionate…"
						}),
						services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s.slug,
							children: s.title
						}, s.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "altro",
							children: "Altro"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Descrizione del lavoro",
				htmlFor: "messaggio",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "messaggio",
					name: "messaggio",
					required: true,
					placeholder: "Superficie, tempi, cosa vorreste fare…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: "privacy",
				className: "flex items-start gap-3 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "privacy",
					type: "checkbox",
					name: "privacy",
					className: "mt-1 size-4 shrink-0 accent-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Acconsento al trattamento dei dati per essere ricontattato in merito a questa richiesta, ai sensi del Regolamento UE 2016/679." })]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-primary",
				role: "alert",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				children: "Invia richiesta"
			})
		]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		htmlFor,
		children: label
	}), children] });
}
//#endregion
export { ContactForm as t };
