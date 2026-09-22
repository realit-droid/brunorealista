import { TIPO_PROJETO } from "./projectType.js";
import { legalPresets } from "./legalPresets.js";

// Overrides manuais para este projeto — só o que quiseres alterar em
// relação ao preset escolhido em projectType.js.
// Ex: { flags: { redesSociais: true } }
//
// O site não usa cookies (sem formulários nem analytics), por isso
// desligamos política/banner de cookies apesar do preset "siteDivulgacao"
// os ligar por defeito.
const overrides = {
  flags: {
    politicaCookies: false,
    bannerCookies: false,
    badgeEstado: true,
    versao: true,
  },
};

const preset = legalPresets[TIPO_PROJETO];

export const legalConfig = {
  ...preset,
  ...overrides,
  flags: {
    ...preset.flags,
    ...(overrides.flags ?? {}),
  },
};
