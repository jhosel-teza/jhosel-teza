// Número de WhatsApp de Spa Lucia (código de país + número, sin espacios ni "+")
const WHATSAPP_NUMBER = "51999999999";

const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Botón flotante
document.getElementById("waFloat").href = waLink("¡Hola Spa Lucia! Quisiera información sobre sus servicios.");

// Año del pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Pestañas de precios
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("is-active"));
    document.querySelectorAll(".price-panel").forEach((p) => p.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.getElementById(tab.dataset.tab).classList.add("is-active");
  })
);

// Formulario de reserva → WhatsApp
const form = document.getElementById("bookingForm");
form.fecha.min = new Date().toISOString().split("T")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const msg =
    `¡Hola Spa Lucia! Quiero reservar una cita:\n` +
    `• Nombre: ${d.nombre}\n` +
    `• Servicio: ${d.servicio}\n` +
    `• Local: ${d.local}\n` +
    `• Fecha: ${d.fecha}\n` +
    `• Hora: ${d.hora}`;
  window.open(waLink(msg), "_blank");
});
