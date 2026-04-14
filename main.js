/* ───── Translations ───── */
const translations = {
  es: {
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.cta": "Probar gratis",
    "hero.badge": "Metallurgic · Gestión de Obras con IA",
    "hero.title": "Cada obra, bajo control.",
    "hero.sub": "Plataforma inteligente para equipos de construcción. Planos, materiales, equipos y reportes — un flujo, todos los roles alineados.",
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
    "pricing.title": "Paga por obra. Sin sorpresas.",
    "pricing.subtitle": "Cuantas más obras gestiones, mejor tu tarifa. Todas las funciones incluidas.",
    "trial.title": "Empieza gratis. 1 obra, 14 días, todo incluido.",
    "trial.desc": "Sin tarjeta de crédito. Tus datos se conservan tras la prueba.",
    "trial.cta": "Probar gratis",
    "plan.s_range": "1 – 4 obras",
    "plan.unit": "/obra",
    "plan.s_f1": "Todas las funciones",
    "plan.s_f2": "Usuarios ilimitados",
    "plan.s_f3": "Planos y zonas",
    "plan.s_f4": "IA para materiales",
    "plan.cta": "Comenzar",
    "plan.pill": "Mejor valor",
    "plan.g_range": "5 – 14 obras",
    "plan.g_f1": "Todo lo de Starter",
    "plan.g_f2": "Descuento por volumen",
    "plan.g_f3": "Reportes avanzados",
    "plan.g_f4": "Onboarding prioritario",
    "plan.e_range": "15+ obras",
    "plan.e_f1": "Todo lo de Growth",
    "plan.e_f2": "Account manager dedicado",
    "plan.e_f3": "Integraciones a medida",
    "plan.e_f4": "SLA y soporte prioritario",
    "plan.cta_contact": "Contactar",
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
      { icon: "✉", bg: "#ef9f27", title: "Reporte semanal generado", meta: "Email · Hace 5 min" },
      { icon: "TG", bg: "#26a5e4", title: "Excepción reportada en F-06", meta: "Telegram · Hace 12 min" },
      { icon: "SM", bg: "#6b7280", title: "Material 'Perfil HEB' al 90%", meta: "SMS · Hace 18 min" },
      { icon: "WA", bg: "#25d366", title: "Nuevo operario asignado a obra", meta: "WhatsApp · Hace 25 min" },
      { icon: "TG", bg: "#26a5e4", title: "Zona C-03 en revisión", meta: "Telegram · Hace 31 min" },
      { icon: "✉", bg: "#ef9f27", title: "Invitado completó zona B-02", meta: "Email · Hace 40 min" },
      { icon: "SM", bg: "#6b7280", title: "3 excepciones pendientes hoy", meta: "SMS · Hace 1 hora" },
    ],
  },

  ca: {
    "nav.features": "Característiques",
    "nav.pricing": "Preus",
    "nav.cta": "Provar gratis",
    "hero.badge": "Metallurgic · Gestió d'Obres amb IA",
    "hero.title": "Cada obra, sota control.",
    "hero.sub": "Plataforma intel·ligent per a equips de construcció. Plànols, materials, equips i informes — un flux, tots els rols alineats.",
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
    "pricing.title": "Paga per obra. Sense sorpreses.",
    "pricing.subtitle": "Com més obres gestionis, millor la teva tarifa. Totes les funcions incloses.",
    "trial.title": "Comença gratis. 1 obra, 14 dies, tot inclòs.",
    "trial.desc": "Sense targeta de crèdit. Les teves dades es conserven després de la prova.",
    "trial.cta": "Provar gratis",
    "plan.s_range": "1 – 4 obres",
    "plan.unit": "/obra",
    "plan.s_f1": "Totes les funcions",
    "plan.s_f2": "Usuaris il·limitats",
    "plan.s_f3": "Plànols i zones",
    "plan.s_f4": "IA per a materials",
    "plan.cta": "Començar",
    "plan.pill": "Millor valor",
    "plan.g_range": "5 – 14 obres",
    "plan.g_f1": "Tot el de Starter",
    "plan.g_f2": "Descompte per volum",
    "plan.g_f3": "Informes avançats",
    "plan.g_f4": "Onboarding prioritari",
    "plan.e_range": "15+ obres",
    "plan.e_f1": "Tot el de Growth",
    "plan.e_f2": "Account manager dedicat",
    "plan.e_f3": "Integracions a mida",
    "plan.e_f4": "SLA i suport prioritari",
    "plan.cta_contact": "Contactar",
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
      { icon: "✉", bg: "#ef9f27", title: "Informe setmanal generat", meta: "Email · Fa 5 min" },
      { icon: "TG", bg: "#26a5e4", title: "Excepció reportada a F-06", meta: "Telegram · Fa 12 min" },
      { icon: "SM", bg: "#6b7280", title: "Material 'Perfil HEB' al 90%", meta: "SMS · Fa 18 min" },
      { icon: "WA", bg: "#25d366", title: "Nou operari assignat a obra", meta: "WhatsApp · Fa 25 min" },
      { icon: "TG", bg: "#26a5e4", title: "Zona C-03 en revisió", meta: "Telegram · Fa 31 min" },
      { icon: "✉", bg: "#ef9f27", title: "Convidat va completar zona B-02", meta: "Email · Fa 40 min" },
      { icon: "SM", bg: "#6b7280", title: "3 excepcions pendents avui", meta: "SMS · Fa 1 hora" },
    ],
  },

  en: {
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.cta": "Try free",
    "hero.badge": "Metallurgic · AI-Powered Construction Management",
    "hero.title": "Every project, under control.",
    "hero.sub": "Intelligent platform for construction teams. Blueprints, materials, teams, and reports — one workflow, every role aligned.",
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
    "pricing.title": "Pay per project. No surprises.",
    "pricing.subtitle": "The more projects you manage, the better your rate. All features included.",
    "trial.title": "Start free. 1 project, 14 days, everything included.",
    "trial.desc": "No credit card required. Your data is preserved after the trial.",
    "trial.cta": "Try free",
    "plan.s_range": "1 – 4 projects",
    "plan.unit": "/project",
    "plan.s_f1": "All features",
    "plan.s_f2": "Unlimited users",
    "plan.s_f3": "Blueprints & zones",
    "plan.s_f4": "AI for materials",
    "plan.cta": "Get started",
    "plan.pill": "Best value",
    "plan.g_range": "5 – 14 projects",
    "plan.g_f1": "Everything in Starter",
    "plan.g_f2": "Volume discount",
    "plan.g_f3": "Advanced reports",
    "plan.g_f4": "Priority onboarding",
    "plan.e_range": "15+ projects",
    "plan.e_f1": "Everything in Growth",
    "plan.e_f2": "Dedicated account manager",
    "plan.e_f3": "Custom integrations",
    "plan.e_f4": "SLA & priority support",
    "plan.cta_contact": "Contact us",
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
      { icon: "✉", bg: "#ef9f27", title: "Weekly report generated", meta: "Email · 5 min ago" },
      { icon: "TG", bg: "#26a5e4", title: "Exception reported in F-06", meta: "Telegram · 12 min ago" },
      { icon: "SM", bg: "#6b7280", title: "Material 'HEB Profile' at 90%", meta: "SMS · 18 min ago" },
      { icon: "WA", bg: "#25d366", title: "New operator assigned to project", meta: "WhatsApp · 25 min ago" },
      { icon: "TG", bg: "#26a5e4", title: "Zone C-03 under review", meta: "Telegram · 31 min ago" },
      { icon: "✉", bg: "#ef9f27", title: "Guest completed zone B-02", meta: "Email · 40 min ago" },
      { icon: "SM", bg: "#6b7280", title: "3 open exceptions today", meta: "SMS · 1 hour ago" },
    ],
  },
};

/* ───── i18n Engine ───── */
function detectLang() {
  const stored = localStorage.getItem("clingio_lang");
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
  localStorage.setItem("clingio_lang", lang);
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
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

setLang(detectLang());

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
    a: [140, 28], b: [280, 65], c: [387, 110],
    d: [140, 110], e: [70, 238], f: [245, 198],
    g: [175, 282], h: [350, 282],
  };

  const states = ["done", "warn", "error"];
  const worker = document.querySelector(".worker");
  const marker = document.querySelector(".exc-marker");
  let i = 0;
  let currentZone = null;

  function applyZone(z, s, m) {
    const zn = document.querySelector(`.zn-${z}`);
    const zl = document.querySelector(`.zl-${z}`);
    if (zn) { zn.classList.remove(...states); zn.classList.add(s); }
    if (zl) { zl.classList.remove(...states); zl.classList.add(s); }
    if (m !== undefined) marker?.classList.toggle("visible", m);
  }

  function tick() {
    const step = steps[i];

    if (step === "reset") {
      worker.classList.remove("hammering");
      worker.style.opacity = "0";
      currentZone = null;
      document.querySelectorAll(".zn").forEach((el) => el.classList.remove(...states));
      document.querySelectorAll(".zl").forEach((el) => el.classList.remove(...states));
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
    console.log("Register request:", payload);

    if (registerMessage) {
      const lang = localStorage.getItem("clingio_lang") || detectLang();
      registerMessage.textContent = translations[lang]["reg.success"];
    }

    registerForm.reset();
  });
}
