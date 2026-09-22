// Script partilhado por todas as páginas do site: aplica a identidade do
// site (título, descrição, favicon) e renderiza o footer, o popup de
// contactos e o banner de cookies. Importa como módulo em cada página
// nova: <script type="module" src="/js/site.js"></script>

import { siteConfig } from "../config/siteConfig.js";
import { legalConfig } from "../config/legalConfig.js";
import { renderFooter } from "../components/footer.js";
import { renderContactModal, initContactModal } from "../components/contactModal.js";
import { renderCookieBanner, initCookieBanner } from "../components/cookieBanner.js";

const pageTitle = document.getElementById("page-title");
if (pageTitle) pageTitle.textContent = siteConfig.nome;

const pageDescription = document.getElementById("page-description");
if (pageDescription) pageDescription.setAttribute("content", siteConfig.descricao);

const pageFavicon = document.getElementById("page-favicon");
if (pageFavicon) pageFavicon.setAttribute("href", siteConfig.favicon);

const siteTitle = document.getElementById("site-title");
if (siteTitle) siteTitle.textContent = siteConfig.nome;

const footerEl = document.getElementById("footer");
if (footerEl) footerEl.innerHTML = renderFooter(legalConfig);

const modalContainer = document.getElementById("contact-modal-container");
if (modalContainer) {
  modalContainer.innerHTML = renderContactModal();
  initContactModal();
}

const cookieContainer = document.getElementById("cookie-banner-container");
if (cookieContainer) {
  cookieContainer.innerHTML = renderCookieBanner();
  initCookieBanner(legalConfig);
}
