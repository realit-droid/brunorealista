// Presets de configuração legal por tipo de projeto.
// Cada preset parte de DEFAULT_FLAGS (tudo a false, exceto copyright e
// contactos) e liga só as flags recomendadas para essa categoria.

const DEFAULT_FLAGS = {
  copyright: true,
  contactos: true,
  politicaPrivacidade: false,
  politicaCookies: false,
  bannerCookies: false,
  termosCondicoes: false,
  fichaTecnica: false,
  livroReclamacoes: false,
  faq: false,
  sitemap: false,
  redesSociais: false,
  versao: false,
  badgeEstado: false,
};

export const legalPresets = {
  portefolioDemo: {
    flags: { ...DEFAULT_FLAGS },
  },

  siteDivulgacao: {
    flags: {
      ...DEFAULT_FLAGS,
      politicaPrivacidade: true,
      politicaCookies: true,
      bannerCookies: true,
      faq: true,
      redesSociais: true,
    },
  },

  ferramentaInterna: {
    flags: {
      ...DEFAULT_FLAGS,
      versao: true,
      badgeEstado: true,
    },
  },

  produtoReal: {
    flags: {
      ...DEFAULT_FLAGS,
      politicaPrivacidade: true,
      politicaCookies: true,
      bannerCookies: true,
      termosCondicoes: true,
      fichaTecnica: true,
      livroReclamacoes: true,
      faq: true,
      sitemap: true,
      redesSociais: true,
      versao: true,
      badgeEstado: true,
    },
  },
};
