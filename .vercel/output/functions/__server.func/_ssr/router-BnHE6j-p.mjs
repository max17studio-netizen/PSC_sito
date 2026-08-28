import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-JdGJjSF0.js
var company = {
	name: "P.S.C. Edilizia Moderna",
	legalName: "P.S.C. Edilizia Moderna S.r.l.",
	shortName: "P.S.C.",
	tagline: "Edilizia su misura, a Lissone e in Brianza.",
	address: "Via Caravaggio, 26/D",
	city: "Lissone",
	zip: "20851",
	province: "MB",
	region: "Monza e Brianza",
	phone: "039 6366122",
	phoneHref: "tel:+390396366122",
	mobile: "350 0298060",
	mobileHref: "tel:+393500298060",
	whatsapp: "https://wa.me/393500298060",
	pec: "pscediliziamodernasrl@legalmail.it",
	pecHref: "mailto:pscediliziamodernasrl@legalmail.it",
	vat: "12249270963",
	rea: "MB-2649346",
	instagram: "https://www.instagram.com/p.s.c.ediliziamoderna/",
	facebook: "https://www.facebook.com/profile.php?id=61550327279068",
	maps: "https://www.google.com/maps/search/?api=1&query=Via+Caravaggio+26%2FD+20851+Lissone",
	osmEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=9.2347%2C45.5986%2C9.2547%2C45.6086&layer=mapnik&marker=45.6036%2C9.2447",
	lat: 45.6036,
	lng: 9.2447
};
var services = [
	{
		slug: "ristrutturazioni",
		title: "Ristrutturazioni chiavi in mano",
		short: "Dallo svuotamento alla consegna, un solo referente.",
		lead: "Ristrutturiamo appartamenti, ville e locali commerciali in Brianza con un cantiere organizzato e tempi dichiarati.",
		image: "/images/living.jpg",
		points: [
			"Sopralluogo e computo metrico",
			"Coordinamento di tutte le maestranze",
			"Finiture interne complete",
			"Consegna pulita e collaudata"
		],
		body: [
			"Il lavoro chiavi in mano è il modo in cui preferiamo operare: un unico contratto, un responsabile di cantiere, un calendario. Non vi lasciamo a coordinare idraulico, elettricista e imbianchino.",
			"Interveniamo su appartamenti, ville unifamiliari e spazi commerciali. Demolizioni, impianti, isolamento, cartongesso, pavimenti, tinteggiature e infissi rientrano nello stesso intervento.",
			"Prima di aprire il cantiere prepariamo le pratiche comunali con un tecnico abilitato, così i lavori partono in regola."
		]
	},
	{
		slug: "costruzioni",
		title: "Costruzioni e nuove edificazioni",
		short: "Opere edili nuove, dalla struttura alle finiture.",
		lead: "Costruiamo e completiamo edifici residenziali e piccoli interventi di nuova edificazione nel territorio di Lissone e hinterland.",
		image: "/images/hero.jpg",
		points: [
			"Opere strutturali e murature",
			"Completamento e finitura",
			"Lottizzazioni e interventi su terreni",
			"Direzione operativa di cantiere"
		],
		body: ["Oltre alla ristrutturazione, eseguiamo costruzioni e completamenti di edifici. Dalla muratura alle finiture, teniamo il cantiere sotto un’unica direzione.", "Lavoriamo su ville, palazzine e interventi di completamento. Il cantiere è organizzato per ridurre i tempi morti tra le fasi: struttura, involucro, impianti, finiture."]
	},
	{
		slug: "isolamenti",
		title: "Isolamento termo-acustico",
		short: "Cappotto, coperture e comfort interno.",
		lead: "Riduciamo i consumi e il rumore con isolamenti a regola d’arte, interni ed esterni.",
		image: "/images/insulation.jpg",
		points: [
			"Cappotto termico esterno",
			"Isolamento di coperture e sottotetti",
			"Contropareti e massetti isolanti",
			"Comfort acustico tra unità"
		],
		body: ["L’isolamento è spesso la voce che cambia di più la casa: bollette, comfort d’estate e d’inverno, rumore dal vicino. Lo eseguiamo come intervento dedicato o dentro una ristrutturazione più ampia.", "Posiamo cappotto esterno, isolamenti in copertura e soluzioni interne. I materiali e gli spessori li scegliamo insieme al progettista, in funzione dell’edificio e del risultato atteso."]
	},
	{
		slug: "finiture",
		title: "Finiture, cartongesso e imbiancatura",
		short: "Pareti, soffitti, pavimenti, tinte.",
		lead: "Finiture interne ed esterne: dal cartongesso al parquet, dall’intonaco alla tinteggiatura.",
		image: "/images/craft.jpg",
		points: [
			"Cartongesso e controsoffitti",
			"Intonaci e rasature",
			"Imbiancatura e verniciature",
			"Pavimenti e rivestimenti"
		],
		body: ["Le finiture decidono come si vive lo spazio. Lavoriamo intonaci, rasature, cartongesso, tinteggiature, parquet, gres e rivestimenti con la stessa attenzione che mettiamo nella struttura.", "Per gli interni residenziali preferiamo superfici calme: tinte a calce o idropitture opache, pavimenti in legno o gres di grande formato, dettagli di battiscopa e soglie risolti prima della posa."]
	},
	{
		slug: "impianti",
		title: "Impianti civili",
		short: "Elettrico, idraulico, climatizzazione.",
		lead: "Installazione e manutenzione di impianti elettrici, idraulici, di riscaldamento e condizionamento.",
		image: "/images/bathroom.jpg",
		points: [
			"Impianti elettrici civili",
			"Idraulica e sanitari",
			"Riscaldamento e condizionamento",
			"Irrigazione e antincendio"
		],
		body: ["In ristrutturazione gli impianti si rifanno quasi sempre. Li integriamo nel cantiere: tracciati, tracciare, posare, collaudare, senza far tornare tre ditte in tre settimane diverse.", "Eseguiamo impianti elettrici, idraulici, di riscaldamento, condizionamento, irrigazione e antincendio, in ambito civile, secondo le lettere del D.M. 37/2008."]
	},
	{
		slug: "infissi",
		title: "Infissi e serramenti",
		short: "Finestre, porte, tapparelle, inferriate.",
		lead: "Fornitura e posa di infissi, porte interne ed esterne, tapparelle, zanzariere e tende.",
		image: "/images/windows.jpg",
		points: [
			"Infissi in alluminio, PVC e legno",
			"Porte interne e portoncini",
			"Tapparelle, persiane, zanzariere",
			"Inferriate e tende da esterno"
		],
		body: ["Infissi e porte chiudono l’involucro: se sono posati male, disperdono e spifferano. Misuriamo, forniamo e posiamo serramenti in alluminio, PVC o legno, con attenzione ai nodi e alle soglie.", "Completiamo con tapparelle, persiane, zanzariere, inferriate, porte blindate e tende da esterno, così l’intervento non resta a metà."]
	},
	{
		slug: "facciate",
		title: "Facciate e involucro",
		short: "Restauro, tinteggiatura, cappotto.",
		lead: "Rifacimento facciate, cornici, intonaci esterni e tinteggiature condominiali.",
		image: "/images/facade.jpg",
		points: [
			"Intonaci e rasature esterne",
			"Tinteggiatura di facciata",
			"Cornici e elementi decorativi",
			"Cappotto e involucro energetico"
		],
		body: ["Una facciata a Lissone e in Brianza vive pioggia, gelo e smog. Interveniamo su intonaci ammalorati, cornici, davanzali e tinte, fino al cappotto quando serve un salto di prestazione.", "Lavoriamo sia su palazzine condominiali sia su ville. Il ponteggio e la sequenza delle fasi li organizziamo per ridurre il disagio a chi abita l’immobile."]
	},
	{
		slug: "pratiche",
		title: "Pratiche edilizie",
		short: "Comune, catasto, titoli abilitativi.",
		lead: "Predisposizione delle pratiche comunali, regionali e ASL, con tecnico abilitato.",
		image: "/images/site.jpg",
		points: [
			"CILA, SCIA e permessi di costruire",
			"Pratiche catastali",
			"Coordinamento con il progettista",
			"Fine lavori e agibilità"
		],
		body: ["Nessun cantiere parte senza titolo. Predisponiamo e presentiamo le pratiche per i lavori che eseguiamo, affidando gli aspetti tecnici a un professionista abilitato.", "Vi accompagniamo da CILA e SCIA fino alla chiusura lavori, così non dovete inseguire scadenze e moduli tra Comune e cantiere."]
	}
];
var projects = [
	{
		slug: "villa-lissone",
		title: "Villa unifamiliare",
		place: "Lissone",
		year: "2025",
		type: "Ristrutturazione completa",
		image: "/images/hero.jpg",
		summary: "Rifacimento di involucro, infissi e interni. Nuovo cappotto, serramenti in bronzo, finiture in calce e parquet."
	},
	{
		slug: "appartamento-monza",
		title: "Appartamento d’epoca",
		place: "Monza",
		year: "2024",
		type: "Ristrutturazione interni",
		image: "/images/living.jpg",
		summary: "Demolizioni interne, nuovi impianti, cartongesso e tinte a calce. Soggiorno aperto sulla cucina, parquet a doghe larghe."
	},
	{
		slug: "cucina-desio",
		title: "Casa a schiera",
		place: "Desio",
		year: "2025",
		type: "Finiture e cucina",
		image: "/images/kitchen.jpg",
		summary: "Rifacimento della zona giorno: cucina su misura, piano in marmo, terrazzo a terra e nuova illuminazione."
	},
	{
		slug: "bagno-seregno",
		title: "Suite da bagno",
		place: "Seregno",
		year: "2024",
		type: "Impianti e finiture",
		image: "/images/bathroom.jpg",
		summary: "Due bagni rifatti da traccia: sanitari, doccia walk-in, rivestimenti in gres e rubinetteria in ottone."
	},
	{
		slug: "facciata-muggio",
		title: "Palazzina residenziale",
		place: "Muggiò",
		year: "2023",
		type: "Facciata e cappotto",
		image: "/images/facade.jpg",
		summary: "Restauro di intonaci e cornici, cappotto termico, tinteggiatura e sistemazione dei davanzali."
	},
	{
		slug: "attico-vimercate",
		title: "Attico sotto tetto",
		place: "Vimercate",
		year: "2024",
		type: "Recupero sottotetto",
		image: "/images/attic.jpg",
		summary: "Recupero di un sottotetto: isolamento in copertura, travi a vista, lucernari e pavimento in rovere."
	}
];
var processSteps = [
	{
		n: "01",
		title: "Sopralluogo",
		text: "Veniamo a vedere l’immobile, ascoltiamo cosa vi serve e rileviamo vincoli, impianti e finiture esistenti."
	},
	{
		n: "02",
		title: "Preventivo",
		text: "Ricevete un computo chiaro, con voci, tempi e cosa è incluso. Niente voci ‘imprevisti’ lasciate in sospeso."
	},
	{
		n: "03",
		title: "Cantiere",
		text: "Un responsabile segue le maestranze. Vi aggiorniamo sulle fasi: demolizioni, impianti, finiture, collaudi."
	},
	{
		n: "04",
		title: "Consegna",
		text: "Pulizia, verifica e consegna delle chiavi. Restiamo disponibili per la manutenzione successiva."
	}
];
var nav = [
	{
		href: "/",
		label: "Home"
	},
	{
		href: "/chi-siamo",
		label: "Chi siamo"
	},
	{
		href: "/servizi",
		label: "Servizi"
	},
	{
		href: "/lavori",
		label: "Lavori"
	},
	{
		href: "/contatti",
		label: "Contatti"
	}
];
function getService(slug) {
	return services.find((s) => s.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BnHE6j-p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-DEekxlab.css";
var APP_NAME = "P.S.C. Edilizia Moderna";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "P.S.C. Edilizia Moderna S.r.l. — impresa edile a Lissone (MB). Ristrutturazioni chiavi in mano, costruzioni, isolamenti, impianti e finiture in Monza e Brianza."
			},
			{
				name: "theme-color",
				content: "#161310"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@300;400;500;600&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "it",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$5 = () => import("./routes-DzL9edgp.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./chi-siamo-iODds5RT.mjs");
var Route$4 = createFileRoute("/chi-siamo")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Chi siamo — P.S.C. Edilizia Moderna" }, {
		name: "description",
		content: "P.S.C. Edilizia Moderna S.r.l. è un’impresa edile di Lissone. Oltre quarant’anni di cantiere in Monza e Brianza."
	}] })
});
var $$splitComponentImporter$3 = () => import("./contatti-DHLMP4YA.mjs");
var Route$3 = createFileRoute("/contatti")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Contatti — P.S.C. Edilizia Moderna" }, {
		name: "description",
		content: "Preventivo gratuito. Via Caravaggio 26/D, Lissone. Tel. 039 6366122 — WhatsApp 350 0298060."
	}] })
});
var $$splitComponentImporter$2 = () => import("./lavori-C33rGTlG.mjs");
var Route$2 = createFileRoute("/lavori")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Lavori — P.S.C. Edilizia Moderna" }, {
		name: "description",
		content: "Interventi residenziali di P.S.C. Edilizia Moderna a Lissone e in Brianza: ville, appartamenti, facciate e sottotetti."
	}] })
});
var $$splitComponentImporter$1 = () => import("./servizi-77jn6_Ol.mjs");
var Route$1 = createFileRoute("/servizi")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Servizi — P.S.C. Edilizia Moderna" }, {
		name: "description",
		content: "Ristrutturazioni chiavi in mano, costruzioni, isolamenti, impianti, infissi, facciate e pratiche edilizie a Lissone."
	}] })
});
var $$splitNotFoundComponentImporter = () => import("./servizi._slug-CYj0oQN2.mjs");
var $$splitComponentImporter = () => import("./servizi._slug-CxVM04lV.mjs");
var Route = createFileRoute("/servizi/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const service = getService(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.service.title} — P.S.C. Edilizia Moderna` : "Servizi — P.S.C. Edilizia Moderna" }] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ChiSiamoRoute = Route$4.update({
	id: "/chi-siamo",
	path: "/chi-siamo",
	getParentRoute: () => Route$6
});
var ContattiRoute = Route$3.update({
	id: "/contatti",
	path: "/contatti",
	getParentRoute: () => Route$6
});
var LavoriRoute = Route$2.update({
	id: "/lavori",
	path: "/lavori",
	getParentRoute: () => Route$6
});
var ServiziRoute = Route$1.update({
	id: "/servizi",
	path: "/servizi",
	getParentRoute: () => Route$6
});
var ServiziRouteChildren = { ServiziSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServiziRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	ChiSiamoRoute,
	ContattiRoute,
	LavoriRoute,
	ServiziRoute: ServiziRoute._addFileChildren(ServiziRouteChildren)
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { processSteps as a, nav as i, Route as n, projects as o, company as r, services as s, router_exports as t };
