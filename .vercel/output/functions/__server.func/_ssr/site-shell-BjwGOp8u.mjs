import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, o as ArrowUpRight, r as Phone, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { i as nav, r as company } from "./router-BlGSicby.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-BjwGOp8u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BrandSvg({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 700 400",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M108 176 L236 64 L364 176 L326 176 L236 102 L146 176 Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 182 L452 46 L600 182 L554 182 L452 94 L350 182 Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M90 140 C28 178 32 328 298 350 C528 370 676 302 680 194 C674 188 662 194 656 206 C646 288 508 342 298 326 C88 306 68 198 120 158 C110 150 100 144 90 140 Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "350",
				y: "248",
				textAnchor: "middle",
				fill: "currentColor",
				fontFamily: "Libre Baskerville, Georgia, Times New Roman, serif",
				fontStyle: "italic",
				fontWeight: "700",
				fontSize: "58",
				children: "P.S.C. srl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "350",
				y: "302",
				textAnchor: "middle",
				fill: "currentColor",
				fontFamily: "Libre Baskerville, Georgia, Times New Roman, serif",
				fontStyle: "italic",
				fontWeight: "400",
				fontSize: "38",
				children: "edilizia moderna"
			})
		]
	});
}
function Logo({ className, inverted = false, size = "header" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center", inverted ? "text-ink-fg" : "text-primary", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandSvg, { className: cn("w-auto", size === "footer" ? "h-16 md:h-20" : "h-12 md:h-14") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "P.S.C. Edilizia Moderna"
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:opacity-90",
			ink: "bg-ink text-ink-fg hover:opacity-90",
			outline: "border border-border bg-transparent text-fg hover:bg-surface",
			ghost: "text-fg hover:bg-surface",
			inverse: "bg-bg text-fg hover:opacity-90",
			inverseOutline: "border border-ink-fg/30 bg-transparent text-ink-fg hover:bg-ink-fg/10"
		},
		size: {
			sm: "h-10 rounded-md px-4 text-sm",
			md: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-lg px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function SiteShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const overlay = pathname === "/";
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const inverted = open || overlay && !scrolled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenuto",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bg focus:px-3 focus:py-2",
				children: "Salta al contenuto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-200", inverted ? "bg-transparent text-ink-fg" : "bg-bg/95 text-fg shadow-[0_1px_0_0_var(--color-border)] backdrop-blur-sm"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 md:h-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							"aria-label": "P.S.C. Edilizia Moderna — home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 lg:flex",
							"aria-label": "Principale",
							children: nav.map((item) => {
								const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.href,
									className: cn("relative text-sm tracking-wide transition-opacity duration-150 hover:opacity-70", active ? "font-medium" : "opacity-80"),
									children: [item.label, active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute -bottom-1 left-0 h-px w-full", inverted ? "bg-ink-fg" : "bg-primary") }) : null]
								}, item.href);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: inverted ? "inverse" : "primary",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contatti",
									children: "Preventivo"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-md lg:hidden",
								"aria-label": open ? "Chiudi menu" : "Apri menu",
								"aria-expanded": open,
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})]
						})
					]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-30 bg-ink text-ink-fg lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex h-full flex-col justify-between px-6 pb-10 pt-24",
					"aria-label": "Mobile",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: "font-display text-4xl font-medium tracking-tight",
							children: item.label
						}) }, item.href))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-sm text-ink-fg/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.phoneHref,
								className: "block",
								children: company.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.whatsapp,
								className: "block",
								children: ["WhatsApp ", company.mobile]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								company.address,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								company.zip,
								" ",
								company.city,
								" (",
								company.province,
								")"
							] })
						]
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "contenuto",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			!open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: company.whatsapp,
				className: "fixed bottom-5 right-5 z-30 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg shadow-[0_8px_24px_rgba(12,18,36,0.22)] transition-transform duration-150 hover:opacity-90 active:scale-[0.96]",
				"aria-label": "Scrivi su WhatsApp",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "WhatsApp"]
			}) : null
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-ink text-ink-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						inverted: true,
						size: "footer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-ink-fg/70",
						children: "Impresa edile a Lissone. Costruzioni, ristrutturazioni chiavi in mano e finiture in Monza e Brianza. Oltre quarant’anni di cantiere."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] uppercase text-ink-fg/50",
						children: "Pagine"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: "hover:opacity-70",
							children: item.label
						}) }, item.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.18em] uppercase text-ink-fg/50",
							children: "Sede"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-4 not-italic text-sm leading-relaxed text-ink-fg/80",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 space-y-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: company.phoneHref,
									className: "block hover:opacity-70",
									children: ["Tel. ", company.phone]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: company.mobileHref,
									className: "block hover:opacity-70",
									children: ["Cell. ", company.mobile]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: company.pecHref,
									className: "block hover:opacity-70",
									children: ["PEC ", company.pec]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.instagram,
								className: "inline-flex items-center gap-1 hover:opacity-70",
								rel: "noreferrer",
								target: "_blank",
								children: ["Instagram ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.facebook,
								className: "inline-flex items-center gap-1 hover:opacity-70",
								rel: "noreferrer",
								target: "_blank",
								children: ["Facebook ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink-fg/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-ink-fg/50 sm:flex-row sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"P. IVA / C.F. ",
					company.vat,
					" · REA ",
					company.rea
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.legalName
				] })]
			})
		})]
	});
}
function PageHero({ kicker, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 pb-14 pt-36 md:pb-20 md:pt-44",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.22em] uppercase text-primary",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl",
					children: title
				}),
				lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg leading-relaxed text-muted",
					children: lead
				}) : null
			]
		})
	});
}
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.22em] uppercase opacity-80",
				children: "Preventivo gratuito"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-xl font-display text-3xl font-medium leading-tight md:text-4xl",
				children: "Avete un cantiere in mente? Veniamo a vederlo."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "inverse",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contatti",
						children: "Richiedi preventivo"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "inverseOutline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: company.whatsapp,
						children: "WhatsApp"
					})
				})]
			})]
		})
	});
}
//#endregion
export { cn as a, SiteShell as i, CtaBand as n, PageHero as r, Button as t };
