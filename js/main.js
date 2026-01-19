document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const backdrop = document.getElementById("modal-backdrop");
  const buttons = document.querySelectorAll(".service-btn");
  const modals = document.querySelectorAll(".modal");

  function closeAllModals() {
    modals.forEach(m => m.classList.remove("is-visible"));
    if (backdrop) backdrop.classList.remove("is-visible");
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.modalId;
      const modal = id ? document.getElementById(id) : null;
      if (!modal || !backdrop) return;

      closeAllModals();
      backdrop.classList.add("is-visible");
      modal.classList.add("is-visible");
    });
  });

  // Cerrar al hacer clic en la X
  document.querySelectorAll(".modal-close").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });

  // Cerrar al hacer clic en el fondo oscuro
  if (backdrop) {
    backdrop.addEventListener("click", closeAllModals);
  }

  // Cerrar con tecla ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
    // Cerrar al hacer clic en el fondo oscuro
  if (backdrop) {
    backdrop.addEventListener("click", closeAllModals);
  }

  // Evitar que el click dentro del modal lo cierre
  modals.forEach(modal => {
    const content = modal.querySelector(".modal-content");
    if (!content) return;

    content.addEventListener("click", e => {
      e.stopPropagation();
    });

    modal.addEventListener("click", closeAllModals);
  });
  // Menú móvil
      const toggle = document.querySelector(".nav-toggle");
      const nav = document.querySelector(".site-nav");

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          const expanded = toggle.getAttribute("aria-expanded") === "true";
          toggle.setAttribute("aria-expanded", String(!expanded));
          nav.classList.toggle("is-open");
        });
      }

      
});
