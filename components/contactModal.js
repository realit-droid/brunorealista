// Popup de contactos, aberto pelo botão "Contactos" do footer.
// Uso: injetar renderContactModal() no DOM e chamar initContactModal()
// depois do footer estar renderizado.

import { contactInfo } from "../config/contactInfo.js";

export function renderContactModal() {
  return `
    <div id="contact-modal-overlay" class="contact-modal-overlay" hidden>
      <div class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button class="contact-modal-close" type="button" aria-label="Fechar">&times;</button>
        <h2 id="contact-modal-title">${contactInfo.nome}</h2>
        <p>Email: <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></p>
        <p>Contacto: ${contactInfo.telefone}</p>
      </div>
    </div>
  `.trim();
}

export function initContactModal() {
  const overlay = document.getElementById("contact-modal-overlay");
  const openBtn = document.getElementById("footer-contacto-btn");
  const closeBtn = overlay?.querySelector(".contact-modal-close");
  if (!overlay || !openBtn) return;

  const open = () => { overlay.hidden = false; };
  const close = () => { overlay.hidden = true; };

  openBtn.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) close();
  });
}
