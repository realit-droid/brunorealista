// Banner de consentimento de cookies. Só aparece se a flag bannerCookies
// do legalConfig estiver ativa e ainda não houver escolha guardada. Uso:
// injetar renderCookieBanner() no DOM e chamar initCookieBanner(config)
// depois do footer estar renderizado.

const STORAGE_KEY = "cookieConsent";

export function renderCookieBanner() {
  return `
    <div id="cookie-banner" class="cookie-banner" hidden>
      <p class="cookie-banner-text">
        Este site usa cookies. Consulta a
        <a href="/legal/politica-cookies.html">Política de Cookies</a> para saber mais.
      </p>
      <div class="cookie-banner-actions">
        <button class="cookie-banner-btn cookie-banner-reject" type="button">Rejeitar</button>
        <button class="cookie-banner-btn cookie-banner-accept" type="button">Aceitar</button>
      </div>
    </div>
  `.trim();
}

export function initCookieBanner(config) {
  if (!config?.flags?.bannerCookies) return;
  if (localStorage.getItem(STORAGE_KEY)) return;

  const banner = document.getElementById("cookie-banner");
  if (!banner) return;

  const acceptBtn = banner.querySelector(".cookie-banner-accept");
  const rejectBtn = banner.querySelector(".cookie-banner-reject");

  const escolher = (valor) => {
    localStorage.setItem(STORAGE_KEY, valor);
    banner.hidden = true;
  };

  acceptBtn?.addEventListener("click", () => escolher("aceite"));
  rejectBtn?.addEventListener("click", () => escolher("rejeitado"));

  banner.hidden = false;
}
