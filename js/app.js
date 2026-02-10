/* =========================
   i18n ES/EN + persistencia
   ========================= */
const I18N = {
  es: {
    nav_about: "Quiénes somos",
    nav_varieties: "Variedades",
    nav_bags: "Presentaciones",
    nav_contact: "Contacto",

    hero_eyebrow: "Café de especialidad • 1200 msnm • Zona Norte",
    hero_title: "Un café de origen que se siente limpio, honesto y memorable.",
    hero_lead:
      "<b>Café Don Cecilio</b> es un proyecto familiar ubicado en la Zona Norte de Costa Rica. " +
      "Desde 2022 cultivamos café de especialidad en un entorno privilegiado donde la altura, " +
      "el clima y el suelo construyen perfiles de taza excepcionales.",
    hero_cta_primary: "Contactar",
    hero_cta_secondary: "Conocer la historia",

    meta_1: "Proyecto familiar",
    meta_2: "Variedades seleccionadas",
    meta_3: "Sostenibilidad y origen",

    about_title: "Quiénes somos",
    about_text:
        "Café don Cecilio es un proyecto familiar de café de especialidad ubicado en la zona norte de Costa Rica, " +
        "a 1200 metros sobre el nivel del mar. Desde 2022, cultivamos cafés de alta calidad en un " +
        "entorno privilegiado, donde la altura, el clima y el suelo dan forma a perfiles de taza " +
        "excepcionales." +
        "<br><br>" +
        "Somos los únicos productores de café de calidad en la zona norte del país, trabajando con " +
        "variedades cuidadosamente seleccionadas como Marsellesa, Obata. Catiguá, Paraneima. IAC-125 y " +
        "Geisha. Nuestra finca se encuentra en las faldas de la reserva hídrica del parque nacional Juan " +
        "Castro Blanco, reflejando nuestro compromiso con la excelencia, la sostenibilidad y el respeto por " +
        "el origen.",
    about_f1_t: "Altura y microclima",
    about_f1_p: "Condiciones ideales para perfiles de taza limpios y complejos.",
    about_f2_t: "Cuidado del proceso",
    about_f2_p: "Atención al detalle desde la finca hasta la taza.",
    about_f3_t: "Origen y sostenibilidad",
    about_f3_p: "Respeto por la tierra y el entorno que nos rodea.",

    var_title: "Variedades",
    var_text: "Trabajamos con variedades cuidadosamente seleccionadas para lograr perfiles únicos.",
    var_c1_t: "Selección",
    var_c1_p: "Elegimos variedades por rendimiento, calidad y expresión en taza.",
    var_c2_t: "Consistencia",
    var_c2_p: "Cuidamos el proceso para mantener un estándar alto y repetible.",
    var_c3_t: "Disponibilidad",
    var_c3_p: "Consultá por cosecha, proceso y presentaciones activas.",

    bags_title: "Presentaciones",
    bags_text: "Conocé nuestras diferentes presentaciones.",
    bags_hint: "Imagen de referencia • reemplazar por bolsa real",

    contact_title: "Contacto",
    contact_text: "Escribinos para pedidos, disponibilidad y envíos.",
    contact_email_t: "Correo",
    contact_note_t: "Nota",
    contact_note_p: "De momento no hay tienda en línea. Coordinamos pedidos por correo o redes.",

    footer_tag: "Zona Norte, Costa Rica • Café de especialidad",

    nav_gallery: "Galería",
gallery_title: "Galería",
gallery_text: "Momentos de finca, proceso y taza.",
gallery_hint: "Deslizá horizontalmente para ver más.",

  },

  en: {
    nav_about: "About",
    nav_varieties: "Varieties",
    nav_bags: "Presentations",
    nav_contact: "Contact",

    hero_eyebrow: "Specialty coffee • 1200 m a.s.l. • Northern Region",
    hero_title: "Origin coffee—clean, honest, and unforgettable.",
    hero_lead:
      "<b>Café Don Cecilio</b> is a family specialty-coffee project in Northern Costa Rica. " +
      "Since 2022, we’ve grown high-quality coffees in a privileged environment where altitude, " +
      "climate, and soil shape exceptional cup profiles.",
    hero_cta_primary: "Contact",
    hero_cta_secondary: "Our story",

    meta_1: "Family project",
    meta_2: "Selected varieties",
    meta_3: "Sustainability & origin",

    about_title: "About us",
    about_text:
      "Café Don Cecilio is a family specialty-coffee project in Northern Costa Rica, at 1200 meters above sea level. " +
      "Our farm sits on the slopes of the Juan Castro Blanco National Park water reserve, reflecting our commitment " +
      "to excellence, sustainability, and respect for origin.",
    about_f1_t: "Altitude & microclimate",
    about_f1_p: "Ideal conditions for clean and complex cup profiles.",
    about_f2_t: "Process care",
    about_f2_p: "Attention to detail from the farm to the cup.",
    about_f3_t: "Origin & sustainability",
    about_f3_p: "Respect for the land and the environment around us.",

    var_title: "Varieties",
    var_text: "We work with carefully selected varieties to achieve unique profiles.",
    var_c1_t: "Selection",
    var_c1_p: "We choose varieties for quality, performance, and cup expression.",
    var_c2_t: "Consistency",
    var_c2_p: "We protect the process to keep a high, repeatable standard.",
    var_c3_t: "Availability",
    var_c3_p: "Ask about harvest, process, and current offerings.",

    bags_title: "Presentations",
bags_text: "Explore our different presentations.",
    bags_hint: "Reference image • replace with real bag photo",

    contact_title: "Contact",
    contact_text: "Email us for orders, availability, and shipping.",
    contact_email_t: "Email",
    contact_note_t: "Note",
    contact_note_p: "No online store yet. Orders are coordinated via email or social media.",

    footer_tag: "Northern Costa Rica • Specialty coffee",

    nav_gallery: "Gallery",
gallery_title: "Gallery",
gallery_text: "Moments from farm, process, and cup.",
gallery_hint: "Swipe horizontally to see more.",

  },
};

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;

    // Permite <b> en algunos textos
    const value = dict[key];
if (typeof value !== "string") return;

if (value.includes("<")) el.innerHTML = value;
else el.textContent = value;

  });

  // Botón muestra el idioma al que cambia
  const label = document.getElementById("langLabel");
  label.textContent = lang === "es" ? "EN" : "ES";

  localStorage.setItem("cdc_lang", lang);
}

(function initLanguage() {
  const saved = localStorage.getItem("cdc_lang");
  setLanguage(saved || "es");

  const btn = document.getElementById("langToggle");
  btn.addEventListener("click", () => {
    const current = document.documentElement.lang || "es";
    setLanguage(current === "es" ? "en" : "es");
  });
})();

/* =========================
   Hero transitions: video + fotos
   ========================= */
(function heroTransitions() {
  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduce) return;

  const video = document.getElementById("heroVideo");
  const slides = Array.from(document.querySelectorAll(".heroSlide"));

  // Si el video no carga, dejamos solo slides
  video?.addEventListener("error", () => {
    if (video) video.style.display = "none";
  });

  let slideIndex = 0;

  // Reglas simples:
  // - El video queda siempre en el fondo
  // - Encima, vamos cambiando imágenes con fade
  // - Eso da “transiciones con las demás fotos” sin complicar
  const intervalMs = 5200;

  function activateSlide(i) {
    slides.forEach((s) => s.classList.remove("isActive"));
    slides[i].classList.add("isActive");
  }

  // Arranque
  if (slides.length) activateSlide(0);

  setInterval(() => {
    if (!slides.length) return;
    slideIndex = (slideIndex + 1) % slides.length;
    activateSlide(slideIndex);
  }, intervalMs);
})();

(() => {
  const header = document.querySelector(".topbar");
  const onScroll = () => {
    if (window.scrollY > 16) header.classList.add("isSolid");
    else header.classList.remove("isSolid");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

(() => {
  const v = document.getElementById("heroVideo");
  if (!v) return;

  const tryPlay = async () => {
    try {
      v.muted = true;          // clave para autoplay
      v.playsInline = true;
      await v.play();
    } catch (e) {
      // Si el navegador bloquea autoplay, intentamos al primer toque
      const resume = async () => {
        try { await v.play(); } catch {}
        window.removeEventListener("touchstart", resume);
        window.removeEventListener("click", resume);
      };
      window.addEventListener("touchstart", resume, { passive: true });
      window.addEventListener("click", resume, { passive: true });
    }
  };

  // intenta apenas carga
  document.addEventListener("DOMContentLoaded", tryPlay);
  // y también cuando vuelve a la pestaña
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
})();


