/* ───── Translations ───── */
const translations = {
  es: {
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.cta": "Probar gratis",
    "hero.badge": "Metallurgic · Gestión de Obras con IA",
    "hero.title_1": "Cada obra,",
    "hero.title_2": "bajo control.",
    "hero.sub": "Plataforma inteligente para equipos de construcción. Planos, materiales, equipos y reportes — un flujo, todos los roles alineados.",
    "hero.dash_title": "Avance de obra",
    "hero.cta_primary": "Probar gratis",
    "hero.cta_secondary": "Descubrir más",
    "hl.ai": "IA que ahorra horas",
    "hl.ai_d": "Extrae materiales de una foto en segundos",
    "hl.visual": "Seguimiento visual",
    "hl.visual_d": "Avance real sobre tus planos, no en spreadsheets",
    "hl.team": "Todo el equipo alineado",
    "hl.team_d": "Oficina y campo en un solo flujo",
    "hl.access": "Acceso inmediato",
    "hl.access_d": "Web, sin instalación. Invitados sin cuenta",
    "feat.badge": "Funcionalidades",
    "feat.title": "Todo lo que tu equipo necesita",
    "feat.subtitle": "Funciones reales, en producción. Sin promesas vacías.",
    "feat.1_t": "Planos interactivos",
    "feat.1_d": "Dibuja zonas sobre planos. Los operarios registran avance tocando cada zona desde campo.",
    "feat.2_t": "Extracción con IA",
    "feat.2_d": "Sube una foto del presupuesto. La IA extrae materiales, cantidades y unidades automáticamente.",
    "feat.3_t": "Control por roles",
    "feat.3_d": "4 roles, permisos por obra, y atribución de trabajo entre operarios.",
    "feat.4_t": "Excepciones con evidencia",
    "feat.4_d": "Reporta problemas sobre el plano con fotos y severidad. Resolución con trazabilidad completa.",
    "feat.5_t": "Reportes profesionales",
    "feat.5_d": "PDF y Excel con tu marca, tablas de materiales y resúmenes ejecutivos.",
    "feat.6_t": "Acceso por enlace",
    "feat.6_d": "Comparte enlaces protegidos para contratistas externos. Sin necesidad de cuenta.",
    "ind.badge": "Verticales",
    "ind.title": "Adaptado a tu industria",
    "ind.subtitle": "Una plataforma, múltiples verticales. Cada operación tiene su flujo.",
    "ind.dc_t": "Datacenters",
    "ind.dc_d": "Racks, cableado, conectividad y certificaciones de instalación — todo trazado en tiempo real.",
    "ind.cx_t": "Obras de construcción",
    "ind.cx_d": "Planos, zonas, materiales y equipos coordinados desde la fundación hasta la entrega.",
    "ind.re_t": "Inmuebles",
    "ind.re_d": "Inspecciones, mantenimiento y reportes de estado por piso, unidad y zona común.",
    "ai.badge": "Inteligencia Artificial",
    "ai.title": "Extrae materiales con una foto",
    "ai.desc": "Sube una foto del presupuesto o plano. La IA analiza, estructura y clasifica — tú solo revisas y confirmas.",
    "ai.s1": "Sube foto, PDF o captura del presupuesto",
    "ai.s2": "La IA extrae materiales, cantidades y unidades",
    "ai.s3": "Revisa, ajusta y añade a la obra en un clic",
    "wf.badge": "Cómo funciona",
    "wf.title": "De plano a reporte en tres pasos",
    "wf.1_t": "Configura la obra",
    "wf.1_d": "El administrador crea la obra, sube planos, dibuja zonas y asigna materiales del catálogo.",
    "wf.2_t": "El equipo ejecuta",
    "wf.2_d": "Operarios registran instalaciones, marcan zonas completadas y reportan excepciones con fotos desde campo.",
    "wf.3_t": "Supervisa y reporta",
    "wf.3_d": "Supervisores ven el avance en tiempo real, resuelven excepciones y generan reportes PDF o Excel con marca del tenant.",
    "pricing.badge": "Precios",
    "pricing.title": "Tu supervisor 24/7. Precio por obra.",
    "pricing.subtitle": "Paga menos por obra cuando gestionas más. Todas las funciones incluidas. Primera obra gratis 30 días.",
    "pricing.bill_monthly": "Mensual",
    "pricing.bill_annual": "Anual",
    "pricing.bill_save": "2 meses gratis",
    "trial.title": "Tu primera obra, gratis por 30 días.",
    "trial.desc": "Sin tarjeta de crédito. Cancela cuando quieras. Tus datos se conservan.",
    "trial.cta": "Probar gratis",
    "calc.currency_label": "Moneda",
    "calc.obras_label": "¿Cuántas obras gestionas?",
    "calc.obras_unit": "obras activas",
    "calc.band_1": "1 – 4 obras",
    "calc.band_2": "5 – 10 obras",
    "calc.band_3": "11+ obras",
    "calc.per_obra": "por obra",
    "calc.per_month": "/mes",
    "calc.per_year": "/año",
    "calc.blended_note": "Todas tus obras se cobran al precio del tramo donde caes (precio blended). Más obras = mejor tarifa en TODAS.",
    "calc.v1": "Alertas tempranas de fraude y mala ejecución",
    "calc.v2": "Planos interactivos con seguimiento visual por zona",
    "calc.v3": "Reportes PDF y Excel con tu marca",
    "calc.v4": "Equipo ilimitado y accesos de invitado",
    "calc.roi_title": "Si Blick evita UN solo fraude o retraso de obra…",
    "calc.roi_body": "El costo de la suscripción se paga solo. El resto del año es ahorro puro.",
    "calc.cta": "Empezar gratis 30 días",
    "reg.title": "Empieza a controlar tus obras",
    "reg.desc": "Cuéntanos sobre tu operación y te contactamos con una propuesta a medida.",
    "reg.ph_name": "Nombre completo",
    "reg.ph_email": "Email de trabajo",
    "reg.ph_company": "Empresa",
    "reg.submit": "Registrarse",
    "reg.success": "Gracias. Hemos recibido tu solicitud de registro.",
    "conn.badge": "Conectividad",
    "conn.title": "Tu obra, conectada a todo",
    "conn.subtitle": "Notificaciones en tiempo real y sincronización con las herramientas que ya usas.",
    "conn.notif_title": "Notificaciones en tiempo real",
    "conn.integ_title": "Integra tus herramientas",
    "conn.notion": "Sincroniza tareas y bases de datos",
    "conn.jira": "Crea tickets desde excepciones",
    "conn.monday": "Tableros sincronizados con obras",
    "conn.slack": "Alertas de equipo en tus canales",
    "conn.teams": "Notificaciones y reuniones de obra",
    "conn.sheets": "Exporta datos en tiempo real",
    _notifs: [
      { icon: "WA", bg: "#25d366", title: "Zona A-01 completada", meta: "WhatsApp · Hace 2 min" },
      { icon: "✉", bg: "#6366f1", title: "Reporte semanal generado", meta: "Email · Hace 5 min" },
      { icon: "TG", bg: "#26a5e4", title: "Excepción reportada en F-06", meta: "Telegram · Hace 12 min" },
      { icon: "SM", bg: "#6b7280", title: "Material 'Perfil HEB' al 90%", meta: "SMS · Hace 18 min" },
      { icon: "WA", bg: "#25d366", title: "Nuevo operario asignado a obra", meta: "WhatsApp · Hace 25 min" },
      { icon: "TG", bg: "#26a5e4", title: "Zona C-03 en revisión", meta: "Telegram · Hace 31 min" },
      { icon: "✉", bg: "#6366f1", title: "Invitado completó zona B-02", meta: "Email · Hace 40 min" },
      { icon: "SM", bg: "#6b7280", title: "3 excepciones pendientes hoy", meta: "SMS · Hace 1 hora" },
    ],
  },

  ca: {
    "nav.features": "Característiques",
    "nav.pricing": "Preus",
    "nav.cta": "Provar gratis",
    "hero.badge": "Metallurgic · Gestió d'Obres amb IA",
    "hero.title_1": "Cada obra,",
    "hero.title_2": "sota control.",
    "hero.sub": "Plataforma intel·ligent per a equips de construcció. Plànols, materials, equips i informes — un flux, tots els rols alineats.",
    "hero.dash_title": "Avenç d'obra",
    "hero.cta_primary": "Provar gratis",
    "hero.cta_secondary": "Descobrir més",
    "hl.ai": "IA integrada",
    "hl.ai_d": "Extreu materials d'una foto en segons",
    "hl.visual": "Seguiment visual",
    "hl.visual_d": "Avenç real sobre els teus plànols, no en spreadsheets",
    "hl.team": "Tot l'equip alineat",
    "hl.team_d": "Oficina i camp en un sol flux",
    "hl.access": "Accés immediat",
    "hl.access_d": "Web, sense instal·lació. Convidats sense compte",
    "feat.badge": "Funcionalitats",
    "feat.title": "Tot el que el teu equip necessita",
    "feat.subtitle": "Funcions reals, en producció. Sense promeses buides.",
    "feat.1_t": "Plànols interactius",
    "feat.1_d": "Dibuixa zones sobre plànols. Els operaris registren avenç tocant cada zona des del camp.",
    "feat.2_t": "Extracció amb IA",
    "feat.2_d": "Puja una foto del pressupost. La IA extreu materials, quantitats i unitats automàticament.",
    "feat.3_t": "Control per rols",
    "feat.3_d": "4 rols, permisos per obra, i atribució de treball entre operaris.",
    "feat.4_t": "Excepcions amb evidència",
    "feat.4_d": "Reporta problemes sobre el plànol amb fotos i severitat. Resolució amb traçabilitat completa.",
    "feat.5_t": "Informes professionals",
    "feat.5_d": "PDF i Excel amb la teva marca, taules de materials i resums executius.",
    "feat.6_t": "Accés per enllaç",
    "feat.6_d": "Comparteix enllaços protegits per a contractistes externs. Sense necessitat de compte.",
    "ind.badge": "Verticals",
    "ind.title": "Adaptat a la teva indústria",
    "ind.subtitle": "Una plataforma, múltiples verticals. Cada operació té el seu flux.",
    "ind.dc_t": "Datacenters",
    "ind.dc_d": "Racks, cablejat, connectivitat i certificacions d'instal·lació — tot traçat en temps real.",
    "ind.cx_t": "Obres de construcció",
    "ind.cx_d": "Plànols, zones, materials i equips coordinats des de la fonamentació fins al lliurament.",
    "ind.re_t": "Immobles",
    "ind.re_d": "Inspeccions, manteniment i informes d'estat per pis, unitat i zona comuna.",
    "ai.badge": "Intel·ligència Artificial",
    "ai.title": "Extreu materials amb una foto",
    "ai.desc": "Puja una foto del pressupost o plànol. La IA analitza, estructura i classifica — tu només revises i confirmes.",
    "ai.s1": "Puja foto, PDF o captura del pressupost",
    "ai.s2": "La IA extreu materials, quantitats i unitats",
    "ai.s3": "Revisa, ajusta i afegeix a l'obra en un clic",
    "wf.badge": "Com funciona",
    "wf.title": "De plànol a informe en tres passos",
    "wf.1_t": "Configura l'obra",
    "wf.1_d": "L'administrador crea l'obra, puja plànols, dibuixa zones i assigna materials del catàleg.",
    "wf.2_t": "L'equip executa",
    "wf.2_d": "Els operaris registren instal·lacions, marquen zones completades i reporten excepcions amb fotos des del camp.",
    "wf.3_t": "Supervisa i reporta",
    "wf.3_d": "Els supervisors veuen l'avenç en temps real, resolen excepcions i generen informes PDF o Excel amb marca del tenant.",
    "pricing.badge": "Preus",
    "pricing.title": "El teu supervisor 24/7. Preu per obra.",
    "pricing.subtitle": "Paga menys per obra quan en gestiones més. Totes les funcions incloses. Primera obra gratis 30 dies.",
    "pricing.bill_monthly": "Mensual",
    "pricing.bill_annual": "Anual",
    "pricing.bill_save": "2 mesos gratis",
    "trial.title": "La teva primera obra, gratis 30 dies.",
    "trial.desc": "Sense targeta de crèdit. Cancel·la quan vulguis. Les teves dades es conserven.",
    "trial.cta": "Provar gratis",
    "calc.currency_label": "Moneda",
    "calc.obras_label": "Quantes obres gestiones?",
    "calc.obras_unit": "obres actives",
    "calc.band_1": "1 – 4 obres",
    "calc.band_2": "5 – 10 obres",
    "calc.band_3": "11+ obres",
    "calc.per_obra": "per obra",
    "calc.per_month": "/mes",
    "calc.per_year": "/any",
    "calc.blended_note": "Totes les teves obres es cobren al preu del tram on caus (preu blended). Més obres = millor tarifa per TOTES.",
    "calc.v1": "Alertes primerenques de frau i mala execució",
    "calc.v2": "Plànols interactius amb seguiment visual per zona",
    "calc.v3": "Informes PDF i Excel amb la teva marca",
    "calc.v4": "Equip il·limitat i accessos d'invitat",
    "calc.roi_title": "Si Blick evita UN sol frau o retard d'obra…",
    "calc.roi_body": "El cost de la subscripció es paga sol. La resta de l'any és estalvi pur.",
    "calc.cta": "Començar gratis 30 dies",
    "reg.title": "Comença a controlar les teves obres",
    "reg.desc": "Explica'ns la teva operació i et contactarem amb una proposta a mida.",
    "reg.ph_name": "Nom complet",
    "reg.ph_email": "Email de treball",
    "reg.ph_company": "Empresa",
    "reg.submit": "Registrar-se",
    "reg.success": "Gràcies. Hem rebut la teva sol·licitud de registre.",
    "conn.badge": "Connectivitat",
    "conn.title": "La teva obra, connectada a tot",
    "conn.subtitle": "Notificacions en temps real i sincronització amb les eines que ja fas servir.",
    "conn.notif_title": "Notificacions en temps real",
    "conn.integ_title": "Integra les teves eines",
    "conn.notion": "Sincronitza tasques i bases de dades",
    "conn.jira": "Crea tickets des d'excepcions",
    "conn.monday": "Taulers sincronitzats amb obres",
    "conn.slack": "Alertes d'equip als teus canals",
    "conn.teams": "Notificacions i reunions d'obra",
    "conn.sheets": "Exporta dades en temps real",
    _notifs: [
      { icon: "WA", bg: "#25d366", title: "Zona A-01 completada", meta: "WhatsApp · Fa 2 min" },
      { icon: "✉", bg: "#6366f1", title: "Informe setmanal generat", meta: "Email · Fa 5 min" },
      { icon: "TG", bg: "#26a5e4", title: "Excepció reportada a F-06", meta: "Telegram · Fa 12 min" },
      { icon: "SM", bg: "#6b7280", title: "Material 'Perfil HEB' al 90%", meta: "SMS · Fa 18 min" },
      { icon: "WA", bg: "#25d366", title: "Nou operari assignat a obra", meta: "WhatsApp · Fa 25 min" },
      { icon: "TG", bg: "#26a5e4", title: "Zona C-03 en revisió", meta: "Telegram · Fa 31 min" },
      { icon: "✉", bg: "#6366f1", title: "Convidat va completar zona B-02", meta: "Email · Fa 40 min" },
      { icon: "SM", bg: "#6b7280", title: "3 excepcions pendents avui", meta: "SMS · Fa 1 hora" },
    ],
  },

  en: {
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.cta": "Try free",
    "hero.badge": "Metallurgic · AI-Powered Construction Management",
    "hero.title_1": "Every project,",
    "hero.title_2": "under control.",
    "hero.sub": "Intelligent platform for construction teams. Blueprints, materials, teams, and reports — one workflow, every role aligned.",
    "hero.dash_title": "Project progress",
    "hero.cta_primary": "Try free",
    "hero.cta_secondary": "Learn more",
    "hl.ai": "Built-in AI",
    "hl.ai_d": "Extract materials from a photo in seconds",
    "hl.visual": "Visual tracking",
    "hl.visual_d": "Real progress on your blueprints, not spreadsheets",
    "hl.team": "Whole team aligned",
    "hl.team_d": "Office and field in one workflow",
    "hl.access": "Instant access",
    "hl.access_d": "Web-based, no install. Guests without accounts",
    "feat.badge": "Features",
    "feat.title": "Everything your team needs",
    "feat.subtitle": "Real features, in production. No empty promises.",
    "feat.1_t": "Interactive blueprints",
    "feat.1_d": "Draw zones on blueprints. Operators log progress by tapping each zone from the field.",
    "feat.2_t": "AI extraction",
    "feat.2_d": "Upload a photo of your budget. AI extracts materials, quantities, and units automatically.",
    "feat.3_t": "Role-based access",
    "feat.3_d": "4 roles, per-project permissions, and work attribution between operators.",
    "feat.4_t": "Exceptions with evidence",
    "feat.4_d": "Report issues on the blueprint with photos and severity. Resolution with full traceability.",
    "feat.5_t": "Professional reports",
    "feat.5_d": "PDF and Excel with your branding, material tables, and executive summaries.",
    "feat.6_t": "Guest access links",
    "feat.6_d": "Share protected links for external contractors. No account needed.",
    "ind.badge": "Industries",
    "ind.title": "Built for your industry",
    "ind.subtitle": "One platform, multiple verticals. Every operation has its workflow.",
    "ind.dc_t": "Datacenters",
    "ind.dc_d": "Racks, cabling, connectivity and installation certifications — all tracked in real time.",
    "ind.cx_t": "Construction",
    "ind.cx_d": "Blueprints, zones, materials and crews coordinated from foundation to handover.",
    "ind.re_t": "Real Estate",
    "ind.re_d": "Inspections, maintenance and status reports by floor, unit and common area.",
    "ai.badge": "Artificial Intelligence",
    "ai.title": "Extract materials from a photo",
    "ai.desc": "Upload a photo of your budget or blueprint. AI analyzes, structures, and classifies — you just review and confirm.",
    "ai.s1": "Upload a photo, PDF, or budget screenshot",
    "ai.s2": "AI extracts materials, quantities, and units",
    "ai.s3": "Review, adjust, and add to the project in one click",
    "wf.badge": "How it works",
    "wf.title": "From blueprint to report in three steps",
    "wf.1_t": "Set up the project",
    "wf.1_d": "The admin creates the project, uploads blueprints, draws zones, and assigns materials from the catalog.",
    "wf.2_t": "The team executes",
    "wf.2_d": "Operators log installations, mark completed zones, and report exceptions with photos from the field.",
    "wf.3_t": "Supervise and report",
    "wf.3_d": "Supervisors see real-time progress, resolve exceptions, and generate branded PDF or Excel reports.",
    "pricing.badge": "Pricing",
    "pricing.title": "Your 24/7 supervisor. Per-project pricing.",
    "pricing.subtitle": "Pay less per project as you manage more. All features included. First project free for 30 days.",
    "pricing.bill_monthly": "Monthly",
    "pricing.bill_annual": "Annual",
    "pricing.bill_save": "2 months free",
    "trial.title": "Your first project, free for 30 days.",
    "trial.desc": "No credit card required. Cancel anytime. Your data is preserved.",
    "trial.cta": "Try free",
    "calc.currency_label": "Currency",
    "calc.obras_label": "How many projects do you manage?",
    "calc.obras_unit": "active projects",
    "calc.band_1": "1 – 4 projects",
    "calc.band_2": "5 – 10 projects",
    "calc.band_3": "11+ projects",
    "calc.per_obra": "per project",
    "calc.per_month": "/mo",
    "calc.per_year": "/yr",
    "calc.blended_note": "All your projects are billed at the rate of the bracket you're in (blended pricing). More projects = better rate on ALL of them.",
    "calc.v1": "Early alerts for fraud and poor execution",
    "calc.v2": "Interactive blueprints with per-zone tracking",
    "calc.v3": "PDF and Excel reports with your branding",
    "calc.v4": "Unlimited team members and guest links",
    "calc.roi_title": "If Blick prevents ONE fraud or project delay…",
    "calc.roi_body": "The subscription pays for itself. The rest of the year is pure savings.",
    "calc.cta": "Start free 30-day trial",
    "reg.title": "Start controlling your projects",
    "reg.desc": "Tell us about your operation and we'll reach out with a tailored proposal.",
    "reg.ph_name": "Full name",
    "reg.ph_email": "Work email",
    "reg.ph_company": "Company",
    "reg.submit": "Register",
    "reg.success": "Thanks. We received your registration request.",
    "conn.badge": "Connectivity",
    "conn.title": "Your project, connected to everything",
    "conn.subtitle": "Real-time notifications and sync with the tools you already use.",
    "conn.notif_title": "Real-time notifications",
    "conn.integ_title": "Integrate your tools",
    "conn.notion": "Sync tasks and databases",
    "conn.jira": "Create tickets from exceptions",
    "conn.monday": "Boards synced with projects",
    "conn.slack": "Team alerts in your channels",
    "conn.teams": "Project notifications and meetings",
    "conn.sheets": "Export data in real time",
    _notifs: [
      { icon: "WA", bg: "#25d366", title: "Zone A-01 completed", meta: "WhatsApp · 2 min ago" },
      { icon: "✉", bg: "#6366f1", title: "Weekly report generated", meta: "Email · 5 min ago" },
      { icon: "TG", bg: "#26a5e4", title: "Exception reported in F-06", meta: "Telegram · 12 min ago" },
      { icon: "SM", bg: "#6b7280", title: "Material 'HEB Profile' at 90%", meta: "SMS · 18 min ago" },
      { icon: "WA", bg: "#25d366", title: "New operator assigned to project", meta: "WhatsApp · 25 min ago" },
      { icon: "TG", bg: "#26a5e4", title: "Zone C-03 under review", meta: "Telegram · 31 min ago" },
      { icon: "✉", bg: "#6366f1", title: "Guest completed zone B-02", meta: "Email · 40 min ago" },
      { icon: "SM", bg: "#6b7280", title: "3 open exceptions today", meta: "SMS · 1 hour ago" },
    ],
  },
};

/* ───── Pricing Calculator ─────
 * Tiered volume pricing — matches backend seed-stripe.ts MONTHLY_TIERS.
 * Per obra / month. Yearly = ×10 (2 months free).
 * Band boundaries match backend: 1–4 → t1, 5–10 → t2, 11+ → t3.
 */
const TIERED_PRICES = {
  USD: { symbol: "$", code: "USD", t1: 379, t2: 325, t3: 299 },
  EUR: { symbol: "€", code: "EUR", t1: 350, t2: 300, t3: 280 },
  MXN: { symbol: "$", code: "MXN", t1: 3499, t2: 2999, t3: 2799 },
};

function formatPrice(curr, amount) {
  const { symbol } = TIERED_PRICES[curr];
  return symbol + amount.toLocaleString("en-US");
}

function tierForQty(qty) {
  if (qty <= 4) return 1;
  if (qty <= 10) return 2;
  return 3;
}

function rateForQty(curr, qty, billing) {
  const tiers = TIERED_PRICES[curr];
  const band = tierForQty(qty);
  const monthly = band === 1 ? tiers.t1 : band === 2 ? tiers.t2 : tiers.t3;
  return billing === "annual" ? monthly * 10 : monthly;
}

function detectCurrency() {
  const stored = localStorage.getItem("blick_currency");
  if (stored && TIERED_PRICES[stored]) return stored;

  const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
  if (tz.includes("mexico")) return "MXN";
  if (tz.startsWith("europe/")) return "EUR";

  const langs = navigator.languages || [navigator.language || ""];
  for (const raw of langs) {
    const l = raw.toLowerCase();
    if (l.startsWith("es-mx")) return "MXN";
    if (
      l.startsWith("es-es") || l.startsWith("ca") ||
      l.startsWith("fr") || l.startsWith("de") ||
      l.startsWith("it") || l.startsWith("pt-pt") ||
      l.startsWith("nl") || l.startsWith("pl")
    ) return "EUR";
  }
  return "USD";
}

function getBilling() {
  return localStorage.getItem("blick_billing") === "annual" ? "annual" : "monthly";
}

function getCurrency() {
  const stored = localStorage.getItem("blick_currency");
  return stored && TIERED_PRICES[stored] ? stored : "USD";
}

function getObras() {
  const raw = localStorage.getItem("blick_obras");
  const n = parseInt(raw, 10);
  return Number.isFinite(n) && n >= 1 && n <= 20 ? n : 5;
}

// Refreshes the pricing calculator from current currency + billing + obra count.
// Driven by three user inputs (currency tabs, billing toggle, slider) plus the
// language engine (which updates period/labels after DOM i18n pass).
function renderCalc() {
  const curr = getCurrency();
  const billing = getBilling();
  const qty = getObras();
  const tiers = TIERED_PRICES[curr];
  const band = tierForQty(qty);
  const mult = billing === "annual" ? 10 : 1;

  const countEl = document.getElementById("calcObrasCount");
  if (countEl) countEl.textContent = qty === 20 ? "20+" : String(qty);

  const sliderEl = document.getElementById("calcObrasSlider");
  if (sliderEl && Number(sliderEl.value) !== qty) sliderEl.value = String(qty);

  [1, 2, 3].forEach((b) => {
    const el = document.querySelector(`[data-band-rate="${b}"]`);
    if (!el) return;
    const rate = (b === 1 ? tiers.t1 : b === 2 ? tiers.t2 : tiers.t3) * mult;
    el.textContent = formatPrice(curr, rate);
  });

  document.querySelectorAll(".calc-band").forEach((el) => {
    el.classList.toggle("active", Number(el.dataset.band) === band);
  });

  const perObraRate = rateForQty(curr, qty, billing);
  const total = perObraRate * qty;

  const lineEl = document.getElementById("calcLineSum");
  if (lineEl) {
    lineEl.textContent = `${qty === 20 ? "20+" : qty} × ${formatPrice(curr, perObraRate)}`;
  }
  const totalEl = document.getElementById("calcTotal");
  if (totalEl) totalEl.textContent = formatPrice(curr, total);

  const periodEl = document.getElementById("calcPeriod");
  if (periodEl) {
    const lang = localStorage.getItem("blick_lang") || detectLang();
    const key = billing === "annual" ? "calc.per_year" : "calc.per_month";
    const fallback = billing === "annual" ? "/año" : "/mes";
    periodEl.textContent = (translations[lang] && translations[lang][key]) || fallback;
  }

  document.querySelectorAll(".curr-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.curr === curr);
  });
}

function setCurrency(curr) {
  if (!TIERED_PRICES[curr]) curr = "USD";
  localStorage.setItem("blick_currency", curr);
  renderCalc();
}

function setBilling(billing) {
  const val = billing === "annual" ? "annual" : "monthly";
  localStorage.setItem("blick_billing", val);
  document.querySelectorAll(".bill-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.billing === val);
  });
  document.body.classList.toggle("is-annual", val === "annual");
  renderCalc();
}

function setObras(n) {
  const v = Math.max(1, Math.min(20, Math.round(Number(n) || 5)));
  localStorage.setItem("blick_obras", String(v));
  renderCalc();
}

/* ───── i18n Engine ───── */
function detectLang() {
  const stored = localStorage.getItem("blick_lang");
  if (stored && translations[stored]) return stored;

  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("ca")) return "ca";
  if (nav.startsWith("es")) return "es";
  return "en";
}

function buildNotifFeed(lang) {
  const track = document.querySelector(".notif-track");
  if (!track) return;
  const notifs = translations[lang]._notifs;
  const cards = [...notifs, ...notifs]
    .map(
      (n) => `<div class="notif-card">
      <div class="notif-icon" style="background:${n.bg}">${n.icon}</div>
      <div class="notif-body">
        <span class="notif-title">${n.title}</span>
        <span class="notif-meta">${n.meta}</span>
      </div>
    </div>`
    )
    .join("");
  track.innerHTML = cards;
}

function setLang(lang) {
  localStorage.setItem("blick_lang", lang);
  document.documentElement.lang = lang;

  const strings = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (strings[key]) el.textContent = strings[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (strings[key]) el.placeholder = strings[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  buildNotifFeed(lang);
  // The period label (/mes vs /año) is read from the current language, so
  // re-render the calculator whenever the language flips.
  if (typeof renderCalc === "function") renderCalc();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

document.querySelectorAll(".bill-btn").forEach((btn) => {
  btn.addEventListener("click", () => setBilling(btn.dataset.billing));
});

document.querySelectorAll(".curr-btn").forEach((btn) => {
  btn.addEventListener("click", () => setCurrency(btn.dataset.curr));
});

const obrasSlider = document.getElementById("calcObrasSlider");
if (obrasSlider) {
  obrasSlider.value = String(getObras());
  obrasSlider.addEventListener("input", (e) => setObras(e.target.value));
}

setLang(detectLang());
setCurrency(detectCurrency());
setBilling(getBilling());
renderCalc();

/* ───── Blueprint Sequence ───── */
(function () {
  const steps = [
    { z: "a", s: "done" },
    { z: "b", s: "warn" },
    { z: "b", s: "done" },
    { z: "d", s: "done" },
    { z: "f", s: "error", m: true },
    { z: "f", s: "done", m: false },
    { z: "c", s: "done" },
    { z: "e", s: "warn" },
    { z: "e", s: "done" },
    { z: "g", s: "done" },
    { z: "h", s: "done" },
    null,
    "reset",
    null,
  ];

  // Position for worker: slightly above-right of each zone's label
  const pos = {
    a: [190, 78], b: [230, 98], c: [270, 118], d: [310, 138],
    e: [150, 98], f: [190, 118], g: [230, 138], h: [270, 158],
  };

  const states = ["done", "warn", "error"];
  const worker = document.querySelector(".worker");
  const marker = document.querySelector(".exc-marker");
  let i = 0;
  let currentZone = null;

  const heroPct = document.getElementById("heroPct");
  const heroFill = document.getElementById("heroFill");
  const heroZones = document.querySelectorAll(".hz");
  const zoneStates = {};

  function updateDash() {
    const done = Object.values(zoneStates).filter(s => s === "done").length;
    const pct = Math.round((done / 8) * 100);
    if (heroPct) heroPct.textContent = pct + "%";
    if (heroFill) heroFill.style.width = pct + "%";
    heroZones.forEach(el => {
      const z = el.dataset.zone;
      el.classList.remove(...states);
      if (zoneStates[z]) el.classList.add(zoneStates[z]);
    });
  }

  function applyZone(z, s, m) {
    document.querySelectorAll(`.zn-${z}`).forEach(el => { el.classList.remove(...states); el.classList.add(s); });
    document.querySelectorAll(`.zl-${z}`).forEach(el => { el.classList.remove(...states); el.classList.add(s); });
    zoneStates[z] = s;
    updateDash();
    if (m !== undefined) marker?.classList.toggle("visible", m);
  }

  function tick() {
    const step = steps[i];

    if (step === "reset") {
      worker.classList.remove("hammering");
      worker.style.opacity = "0";
      currentZone = null;
      document.querySelectorAll(".zn, .zl").forEach((el) => el.classList.remove(...states));
      Object.keys(zoneStates).forEach(k => delete zoneStates[k]);
      updateDash();
      marker?.classList.remove("visible");
    } else if (step) {
      if (step.z === currentZone) {
        // Same zone — keep hammering, just update state
        applyZone(step.z, step.s, step.m);
      } else {
        // New zone — move worker, then hammer on arrival
        currentZone = step.z;
        const [x, y] = pos[step.z];

        if (worker.style.opacity === "0") {
          worker.style.transition = "none";
          worker.style.transform = `translate(${x}px, ${y}px)`;
          worker.offsetHeight;
          worker.style.transition = "";
        } else {
          worker.classList.remove("hammering");
          worker.style.transform = `translate(${x}px, ${y}px)`;
        }

        worker.style.opacity = "0.9";

        setTimeout(() => {
          worker.classList.add("hammering");
          applyZone(step.z, step.s, step.m);
        }, 650);
      }
    }

    i = (i + 1) % steps.length;
  }

  setInterval(tick, 1500);
})();

/* ───── Scroll Animations ───── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

/* ───── Register Form ───── */
const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");

if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(registerForm);
    const payload = Object.fromEntries(formData.entries());
    payload.lang = localStorage.getItem("blick_lang") || detectLang();

    const btn = registerForm.querySelector("button");
    btn.disabled = true;
    btn.textContent = "...";

    fetch("https://formspree.io/f/mpqkwddj", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
      .then((r) => {
        const lang = payload.lang;
        if (r.ok) {
          registerMessage.textContent = translations[lang]["reg.success"];
          registerForm.reset();
        } else {
          registerMessage.textContent = "Error. Please try again.";
          registerMessage.style.color = "#f87171";
        }
      })
      .catch(() => {
        registerMessage.textContent = "Error. Please try again.";
        registerMessage.style.color = "#f87171";
      })
      .finally(() => {
        btn.disabled = false;
        const lang = localStorage.getItem("blick_lang") || detectLang();
        btn.textContent = translations[lang]["reg.submit"];
      });
  });
}
