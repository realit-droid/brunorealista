// Footer modular: renderiza apenas os blocos cujas flags em legalConfig
// estão a true. Uso: renderFooter(legalConfig)

import { siteInfo } from "../config/siteInfo.js";
import { siteConfig } from "../config/siteConfig.js";

const LINKS = {
  politicaPrivacidade: { label: "Política de Privacidade", href: "/legal/politica-privacidade.html" },
  politicaCookies: { label: "Política de Cookies", href: "/legal/politica-cookies.html" },
  termosCondicoes: { label: "Termos e Condições", href: "/legal/termos-condicoes.html" },
  fichaTecnica: { label: "Ficha Técnica", href: "/legal/ficha-tecnica.html" },
  livroReclamacoes: { label: "Livro de Reclamações", href: "https://www.livroreclamacoes.pt" },
  faq: { label: "FAQ", href: "/legal/faq.html" },
  sitemap: { label: "Mapa do Site", href: "/legal/sitemap.html" },
};

// Cor do badge de estado: laranja para ambientes não-produção, verde para produção.
const COR_BADGE_ESTADO = {
  "Em Desenvolvimento": "#e08a1e",
  "Em Testes": "#e08a1e",
  Produção: "#2e9e5b",
};

export function renderFooter(config) {
  const { flags } = config;

  const linkItems = Object.entries(LINKS)
    .filter(([flag]) => flags[flag])
    .map(([, { label, href }]) => `<a class="footer-link" href="${href}">${label}</a>`)
    .join("");
  const linksRow = linkItems ? `<div class="footer-links">${linkItems}</div>` : "";

  const redesAtivas = (siteConfig.redesSociais ?? []).filter((rede) => rede.href);
  const socialRow = flags.redesSociais && redesAtivas.length
    ? `<div class="footer-social">${redesAtivas.map(
        (s) => `<a class="footer-social-link" href="${s.href}" aria-label="${s.label}">${s.label}</a>`
      ).join("")}</div>`
    : "";

  const copyrightText = flags.copyright ? `© ${new Date().getFullYear()} ${siteConfig.nome}` : "";
  const contactoLink = flags.contactos
    ? `<button class="footer-link footer-contacto-btn" type="button" id="footer-contacto-btn">Contactos</button>`
    : "";

  const versionBadge = flags.versao
    ? `<span class="footer-badge">v${siteInfo.versao}</span>`
    : "";

  const corEstado = COR_BADGE_ESTADO[siteInfo.estado] ?? "#e08a1e";
  const estadoBadge = flags.badgeEstado
    ? `<span class="footer-badge footer-badge-estado" style="background-color:${corEstado}">${siteInfo.estado}</span>`
    : "";

  return `
    <footer class="site-footer">
      ${linksRow}
      <div class="footer-bottom">
        <span class="footer-meta">${copyrightText} ${versionBadge} ${estadoBadge}</span>
        <span class="footer-meta-right">${contactoLink}${socialRow}</span>
      </div>
    </footer>
  `.trim();
}
