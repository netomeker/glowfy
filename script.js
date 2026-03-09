const PRODUCT_CONFIG = {
  checkoutUrl: "/oferta",
  ctaEventName: "quiz_cta_click",
  source: "glowfy_quiz_presenca",
  limitedSpots: 27,
  promoDeadlineFallback: "hoje às 23:59",
  promoWindowMinHours: 5,
  promoWindowMaxHours: 8,
};

const PROMO_TIMER_STORAGE_KEY = "glowfy_promo_window_v1";

const DEFAULT_RESULT_COPY_CONFIG = {
  fallbackProfile: "build",
  profiles: {
    critical: {
      kicker: "Seu resultado do quiz",
      diagnostic: "Pelo seu quiz, o ponto que mais te segura hoje está em: {{topArea}}.",
      confidenceBase:
        "Você já tem potencial para melhorar o visual, a conversa e a confiança. Falta só direção.",
      consequence:
        "Sem ajuste, você trava em momentos importantes e perde boas oportunidades.",
      opportunity: "Você não precisa mudar tudo. Com os ajustes certos, seu resultado começa a aparecer rápido.",
      transition: "Foi para isso que criamos o Glowfy.",
      explanation:
        "Você recebe um plano simples para evoluir aparência, lábia, postura e confiança no dia a dia.",
      urgency: "Promoção por tempo limitado: condição especial disponível até {{promoDeadline}}.",
      scarcity: "Vagas limitadas nesta turma: {{limitedSpots}} acessos restantes.",
      bullets: [
        "O erro comum que faz muita gente parecer menos confiante sem perceber.",
        "O ajuste rápido que muda como as pessoas te enxergam.",
        "A rotina de 7 minutos para falar com mais segurança e postura.",
      ],
      buttonText: "Quero liberar meu Glowfy agora",
      buttonAriaLabel: "Abrir plano personalizado agora",
      accessNote: "Pagamento seguro. Acesso imediato após a confirmação.",
    },
    build: {
      kicker: "Seu resultado do quiz",
      diagnostic: "Pelo seu quiz, o ponto que mais te segura hoje está em: {{topArea}}.",
      confidenceBase:
        "Você já construiu uma base boa. Agora falta consistência para o seu glow up acontecer de verdade.",
      consequence: "Sem ajuste, você melhora em alguns dias, mas depois volta a travar.",
      opportunity: "Você não precisa mudar tudo. Com os ajustes certos, seu progresso fica estável.",
      transition: "Foi para isso que criamos o Glowfy.",
      explanation:
        "Você recebe um plano simples para evoluir aparência, lábia, postura e confiança no dia a dia.",
      urgency: "Promoção por tempo limitado: condição especial disponível até {{promoDeadline}}.",
      scarcity: "Vagas limitadas nesta turma: {{limitedSpots}} acessos restantes.",
      bullets: [
        "O erro comum que faz muita gente parecer menos confiante sem perceber.",
        "O ajuste rápido que muda como as pessoas te enxergam.",
        "A rotina de 7 minutos para falar com mais segurança e postura.",
      ],
      buttonText: "Quero liberar meu Glowfy agora",
      buttonAriaLabel: "Abrir plano personalizado agora",
      accessNote: "Pagamento seguro. Acesso imediato após a confirmação.",
    },
    advanced: {
      kicker: "Seu resultado do quiz",
      diagnostic: "Pelo seu quiz, o ponto que mais te segura hoje está em: {{topArea}}.",
      confidenceBase:
        "Você já está em um bom nível. Com poucos ajustes, dá para acelerar ainda mais seu glow up.",
      consequence:
        "Sem ajuste, você mantém uma base boa, mas fica abaixo do seu potencial real.",
      opportunity: "Você não precisa mudar tudo. Um ajuste certo já dá um salto no resultado.",
      transition: "Foi para isso que criamos o Glowfy.",
      explanation:
        "Você recebe um plano simples para evoluir aparência, lábia, postura e confiança no dia a dia.",
      urgency: "Promoção por tempo limitado: condição especial disponível até {{promoDeadline}}.",
      scarcity: "Vagas limitadas nesta turma: {{limitedSpots}} acessos restantes.",
      bullets: [
        "O erro comum que faz muita gente parecer menos confiante sem perceber.",
        "O ajuste rápido que muda como as pessoas te enxergam.",
        "A rotina de 7 minutos para falar com mais segurança e postura.",
      ],
      buttonText: "Quero liberar meu Glowfy agora",
      buttonAriaLabel: "Abrir plano personalizado agora",
      accessNote: "Pagamento seguro. Acesso imediato após a confirmação.",
    },
  },
};

const ENTRY_MAIN_QUESTION = "Quando você chega em um lugar novo, qual opção mais parece com você hoje?";

const QUIZ_STEPS = [
  {
    id: "entry",
    area: "Entrada social",
    hint: "Descubra seu bloqueio principal",
    intel: "Essa resposta ajuda a mapear seu padrão de chegada",
    cta: "Descobrir meu padrão",
    question: ENTRY_MAIN_QUESTION,
    support:
      "Essa etapa mostra como você se comporta na chegada e define o primeiro ajuste do seu plano Glowfy.",
    options: [
      {
        label: "Me escondo no celular até alguém puxar assunto.",
        detail: "Evito me expor para não passar vergonha.",
        pain: 4,
        confidence: 1,
        impact:
          "Hoje você se protege demais na chegada. Com isso, boas conexões passam antes mesmo de começar.",
      },
      {
        label: "Fico perto de alguém conhecido e evito arriscar.",
        detail: "Interajo no seguro, sem abrir espaço para novas conexões.",
        pain: 3,
        confidence: 2,
        impact:
          "Você até interage, mas fica no seguro. Esse padrão limita novas conexões.",
      },
      {
        label: "Demoro para me soltar, mas depois entro no clima.",
        detail: "Preciso de tempo para sentir confiança no ambiente.",
        pain: 2,
        confidence: 3,
        impact:
          "Você se solta depois, mas o início ainda te custa oportunidades importantes.",
      },
      {
        label: "Chego leve, converso e não fico me policiando.",
        detail: "Consigo entrar no ambiente com naturalidade e presença.",
        pain: 1,
        confidence: 4,
        impact:
          "Sua chegada já passa segurança. O próximo passo é manter esse nível em qualquer ambiente.",
      },
    ],
  },
  {
    id: "image",
    area: "Imagem percebida",
    hint: "Mapa em andamento",
    intel: "Etapa usada para calcular impacto de imagem",
    cta: "Ver próximo traço",
    question: "Quando você olha para sua imagem hoje, qual frase te define melhor?",
    support:
      "Aqui aparece o quanto seu visual reforça sua confiança ou entrega insegurança sem você perceber.",
    options: [
      {
        label: "Meu visual quase nunca representa quem eu quero ser.",
        detail: "Sinto que passo uma versão menor do que realmente sou.",
        pain: 4,
        confidence: 1,
        impact:
          "Sua imagem ainda não mostra quem você realmente é. Isso enfraquece sua presença no primeiro olhar.",
      },
      {
        label: "Faço o básico, mas ainda pareço comum demais.",
        detail: "Não está ruim, mas falta assinatura e intenção.",
        pain: 3,
        confidence: 2,
        impact:
          "Você está no básico e acaba parecendo comum demais. Falta um ajuste para sua imagem marcar presença.",
      },
      {
        label: "Tenho pontos fortes, mas falta consistência.",
        detail: "Acerto em alguns dias, em outros volto para o improviso.",
        pain: 2,
        confidence: 3,
        impact:
          "Você acerta em alguns dias, mas ainda sem padrão. Com método, seu visual fica forte de forma constante.",
      },
      {
        label: "Meu visual passa segurança e combina comigo.",
        detail: "Tenho clareza do que funciona para minha imagem.",
        pain: 1,
        confidence: 4,
        impact:
          "Sua base visual é boa e já transmite confiança. Agora é hora de refinar detalhes para subir de nível.",
      },
    ],
  },
  {
    id: "conversation",
    area: "Condução de conversa",
    hint: "Calculando seu bloqueio social",
    intel: "Resposta usada para mapear fluidez de comunicação",
    cta: "Continuar",
    question: "Quando você conversa com alguém que te interessa, o que costuma acontecer?",
    support:
      "Esse ponto mostra se você cria conexão real ou deixa oportunidades morrerem no meio do papo.",
    options: [
      {
        label: "Travo, respondo pouco e o assunto morre rápido.",
        detail: "Fico tenso e tento terminar logo para não errar.",
        pain: 4,
        confidence: 1,
        impact:
          "Você sente o que quer dizer, mas trava na hora de falar. A conexão perde força rápido.",
      },
      {
        label: "Começo bem, mas perco direção no meio da conversa.",
        detail: "A abertura funciona, mas não sei conduzir para conexão.",
        pain: 3,
        confidence: 2,
        impact:
          "Você começa bem, mas perde direção no meio. Falta estrutura para manter o interesse até o fim.",
      },
      {
        label: "Converso bem, mas ainda fico me policiando demais.",
        detail: "Tem fluidez, porém falta espontaneidade em momentos-chave.",
        pain: 2,
        confidence: 3,
        impact:
          "Você conversa bem, só que ainda se freia em momentos-chave. Pequenos ajustes já aumentam seu impacto.",
      },
      {
        label: "Conduzo com naturalidade e crio conexão com facilidade.",
        detail: "Consigo manter ritmo e presença durante a interação.",
        pain: 1,
        confidence: 4,
        impact:
          "Você conduz bem e cria conexão com naturalidade. O próximo passo é transformar isso em padrão diário.",
      },
    ],
  },
  {
    id: "initiative",
    area: "Iniciativa",
    hint: "Consolidando sua confiança",
    intel: "Etapa usada para mapear comportamento de ação",
    cta: "Avançar no mapa",
    question: "Quando aparece uma chance real de conexão, qual atitude você toma?",
    support:
      "Esta resposta mostra se você lidera sua vida social ou deixa o medo escolher por você.",
    options: [
      {
        label: "Adio e quase nunca tomo atitude.",
        detail: "Fico preso no 'depois eu vejo' e saio frustrado.",
        pain: 4,
        confidence: 1,
        impact:
          "O medo está decidindo por você em momentos importantes. Isso te afasta de oportunidades reais.",
      },
      {
        label: "Tento no online, mas travo para levar ao presencial.",
        detail: "Início existe, mas falta conversão para vida real.",
        pain: 3,
        confidence: 2,
        impact:
          "Você inicia no online, mas não transforma em encontro real. Falta um passo claro de transição.",
      },
      {
        label: "Ajo em algumas situações, mas ainda oscilo.",
        detail: "Tem iniciativa, porém sem consistência em todos os contextos.",
        pain: 2,
        confidence: 3,
        impact:
          "Você toma atitude, mas ainda oscila. Com rotina certa, isso vira consistência.",
      },
      {
        label: "Tomo atitude com calma e sem me sabotar.",
        detail: "Consigo transformar interesse em movimento real.",
        pain: 1,
        confidence: 4,
        impact:
          "Você já age com segurança e sem autossabotagem. Agora é manter frequência para acelerar resultado.",
      },
    ],
  },
  {
    id: "consistency",
    area: "Consistência diária",
    hint: "Última etapa do mapa",
    intel: "Seu perfil final está sendo montado em tempo real",
    cta: "Ver meu mapa final",
    question: "Qual nível de compromisso você topa pelos próximos dias?",
    support:
      "Essa escolha define a velocidade da sua evolução: sem consistência, qualquer resultado vira acaso.",
    options: [
      {
        label: "Só faço se for quando eu lembrar.",
        detail: "Não consigo manter rotina com frequência.",
        pain: 4,
        confidence: 1,
        impact:
          "Sem rotina, seu resultado fica na sorte. Você melhora um dia e perde no outro.",
      },
      {
        label: "Consigo fazer, mas costumo falhar alguns dias.",
        detail: "Tenho vontade, mas a disciplina quebra no meio.",
        pain: 3,
        confidence: 2,
        impact:
          "Você tem vontade, mas a constância quebra no meio. Isso atrasa sua evolução.",
      },
      {
        label: "Consigo manter 10 minutos por dia.",
        detail: "Tenho rotina curta e consigo seguir com regularidade.",
        pain: 2,
        confidence: 3,
        impact:
          "Você já tem uma boa base diária. Com direção, evolui mais rápido e sem desgaste.",
      },
      {
        label: "Consigo manter 15 minutos por dia com foco.",
        detail: "Tenho disciplina para aplicar sem enrolação.",
        pain: 1,
        confidence: 4,
        impact:
          "Você já tem disciplina acima da média. Esse é o melhor cenário para um glow up consistente.",
      },
    ],
  },
];

function getInlineResultCopyConfig() {
  const jsonScript = document.getElementById("quizResultCopy");
  if (!jsonScript) {
    return null;
  }

  try {
    return JSON.parse(jsonScript.textContent || "{}");
  } catch (error) {
    console.warn("Config JSON inválida em #quizResultCopy. Usando padrão.", error);
    return null;
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeCopyLine(value, fallback) {
  return isNonEmptyString(value) ? value : fallback;
}

function normalizeBullets(bullets, fallbackBullets) {
  const safeFallback = Array.isArray(fallbackBullets) ? fallbackBullets.slice(0, 3) : [];

  if (!Array.isArray(bullets)) {
    return safeFallback;
  }

  const safeBullets = bullets.filter((bullet) => isNonEmptyString(bullet)).slice(0, 3);
  if (safeBullets.length < 2) {
    return safeFallback;
  }

  return safeBullets;
}

function normalizeProfileCopy(profile, fallbackProfile) {
  const raw = profile && typeof profile === "object" ? profile : {};

  return {
    kicker: isNonEmptyString(raw.kicker) ? raw.kicker : fallbackProfile.kicker,
    diagnostic: normalizeCopyLine(raw.diagnostic, fallbackProfile.diagnostic),
    confidenceBase: normalizeCopyLine(raw.confidenceBase, fallbackProfile.confidenceBase),
    consequence: normalizeCopyLine(raw.consequence, fallbackProfile.consequence),
    opportunity: normalizeCopyLine(raw.opportunity, fallbackProfile.opportunity),
    transition: normalizeCopyLine(raw.transition, fallbackProfile.transition),
    explanation: normalizeCopyLine(raw.explanation, fallbackProfile.explanation),
    urgency: normalizeCopyLine(raw.urgency, fallbackProfile.urgency),
    scarcity: normalizeCopyLine(raw.scarcity, fallbackProfile.scarcity),
    bullets: normalizeBullets(raw.bullets, fallbackProfile.bullets),
    buttonText: isNonEmptyString(raw.buttonText) ? raw.buttonText : fallbackProfile.buttonText,
    buttonAriaLabel: isNonEmptyString(raw.buttonAriaLabel)
      ? raw.buttonAriaLabel
      : fallbackProfile.buttonAriaLabel,
    accessNote: normalizeCopyLine(raw.accessNote, fallbackProfile.accessNote),
  };
}

function buildResultCopyConfig(rawConfig) {
  const defaults = DEFAULT_RESULT_COPY_CONFIG;
  const raw = rawConfig && typeof rawConfig === "object" ? rawConfig : {};
  const rawProfiles = raw.profiles && typeof raw.profiles === "object" ? raw.profiles : {};
  const normalizedProfiles = {};

  Object.keys(defaults.profiles).forEach((profileKey) => {
    normalizedProfiles[profileKey] = normalizeProfileCopy(
      rawProfiles[profileKey],
      defaults.profiles[profileKey],
    );
  });

  Object.keys(rawProfiles).forEach((profileKey) => {
    if (normalizedProfiles[profileKey]) {
      return;
    }

    normalizedProfiles[profileKey] = normalizeProfileCopy(
      rawProfiles[profileKey],
      defaults.profiles[defaults.fallbackProfile],
    );
  });

  const fallbackProfile =
    isNonEmptyString(raw.fallbackProfile) && normalizedProfiles[raw.fallbackProfile]
      ? raw.fallbackProfile
      : defaults.fallbackProfile;

  return {
    fallbackProfile,
    profiles: normalizedProfiles,
  };
}

const RESULT_COPY_CONFIG = buildResultCopyConfig(getInlineResultCopyConfig());

const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const stepLabel = document.getElementById("stepLabel");
const stepHint = document.getElementById("stepHint");
const questionText = document.getElementById("questionText");
const supportText = document.getElementById("supportText");
const optionGrid = document.getElementById("optionGrid");
const impactLine = document.getElementById("impactLine");
const progressFill = document.getElementById("progressFill");
const intelLine = document.getElementById("intelLine");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const ctaBtn = document.getElementById("ctaBtn");
const resultKicker = document.getElementById("resultKicker");
const resultHeadline = document.getElementById("resultHeadline");
const confidenceLine = document.getElementById("confidenceLine");
const objectionLine = document.getElementById("objectionLine");
const breakLine = document.getElementById("breakLine");
const urgencyLine = document.getElementById("urgencyLine");
const scarcityLine = document.getElementById("scarcityLine");
const accessNote = document.getElementById("accessNote");
const curiosityList = document.getElementById("curiosityList");
const mapsGeneratedElement = document.querySelector(".proof-pill strong");

const MAX_PAIN = QUIZ_STEPS.reduce((total, step) => {
  return total + Math.max(...step.options.map((option) => option.pain));
}, 0);

const MAX_CONFIDENCE = QUIZ_STEPS.reduce((total, step) => {
  return total + Math.max(...step.options.map((option) => option.confidence));
}, 0);

let currentStep = 0;
const answers = new Array(QUIZ_STEPS.length).fill(null);
const magneticButtons = [];
let magneticLoopStarted = false;
let latestResultPayload = null;
const MOBILE_QUERY = "(max-width: 720px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
let promoWindow = getOrCreatePromoWindow();

function isMobileViewport() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function vibrateIfAvailable(pattern) {
  if (!isMobileViewport() || prefersReducedMotion()) {
    return;
  }

  if (typeof navigator.vibrate === "function") {
    navigator.vibrate(pattern);
  }
}

function triggerMobileIntro() {
  if (!isMobileViewport() || prefersReducedMotion()) {
    return;
  }

  document.body.classList.add("mobile-quiz-start");
  window.setTimeout(() => {
    document.body.classList.remove("mobile-quiz-start");
  }, 650);

  vibrateIfAvailable([32, 52, 38]);
}

function animateCardShift() {
  quizCard.classList.remove("switching");
  // Reflow para reiniciar a animação sem recriar elementos.
  void quizCard.offsetWidth;
  quizCard.classList.add("switching");
}

function toPercent(value, maxValue) {
  if (!maxValue) {
    return 0;
  }

  return Math.round((value / maxValue) * 100);
}

function getStorage() {
  try {
    return window.localStorage;
  } catch (error) {
    return null;
  }
}

function getSmartPromoDurationHours(openedAt) {
  const hour = openedAt.getHours();
  const minHours = Math.max(5, PRODUCT_CONFIG.promoWindowMinHours || 5);
  const maxHours = Math.max(minHours, PRODUCT_CONFIG.promoWindowMaxHours || minHours);

  let suggested = 6;
  if (hour >= 6 && hour < 12) {
    suggested = 6;
  } else if (hour >= 12 && hour < 18) {
    suggested = 5;
  } else if (hour >= 18 && hour < 23) {
    suggested = 7;
  } else {
    suggested = 8;
  }

  return Math.max(minHours, Math.min(maxHours, suggested));
}

function readStoredPromoWindow() {
  const storage = getStorage();
  if (!storage) {
    return null;
  }

  const raw = storage.getItem(PROMO_TIMER_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    if (
      !parsed ||
      typeof parsed !== "object" ||
      typeof parsed.openedAt !== "number" ||
      typeof parsed.expiresAt !== "number" ||
      typeof parsed.durationHours !== "number"
    ) {
      return null;
    }

    return parsed;
  } catch (error) {
    return null;
  }
}

function savePromoWindow(windowData) {
  const storage = getStorage();
  if (!storage) {
    return;
  }

  try {
    storage.setItem(PROMO_TIMER_STORAGE_KEY, JSON.stringify(windowData));
  } catch (error) {
    // Silencioso: se storage falhar, seguimos sem persistir.
  }
}

function createPromoWindow(referenceDate) {
  const openedAt = referenceDate.getTime();
  const durationHours = getSmartPromoDurationHours(referenceDate);
  const expiresAt = openedAt + durationHours * 60 * 60 * 1000;

  return { openedAt, expiresAt, durationHours };
}

function getOrCreatePromoWindow() {
  const now = Date.now();
  const stored = readStoredPromoWindow();

  if (stored && stored.expiresAt > now) {
    return stored;
  }

  const fresh = createPromoWindow(new Date(now));
  savePromoWindow(fresh);
  return fresh;
}

function formatPromoDeadline(expiresAt) {
  const now = new Date();
  const end = new Date(expiresAt);
  const sameDay = now.toDateString() === end.toDateString();

  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const isTomorrow = tomorrow.toDateString() === end.toDateString();

  const timeLabel = end.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (sameDay) {
    return `hoje às ${timeLabel}`;
  }

  if (isTomorrow) {
    return `amanhã às ${timeLabel}`;
  }

  const dateLabel = end.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
  return `${dateLabel} às ${timeLabel}`;
}

function getPromoDeadlineLabel() {
  if (!promoWindow || !promoWindow.expiresAt) {
    promoWindow = getOrCreatePromoWindow();
  }

  if (!promoWindow || !promoWindow.expiresAt) {
    return PRODUCT_CONFIG.promoDeadlineFallback;
  }

  if (promoWindow.expiresAt <= Date.now()) {
    promoWindow = getOrCreatePromoWindow();
  }

  return formatPromoDeadline(promoWindow.expiresAt);
}

function interpolateTokens(text, tokens) {
  if (!isNonEmptyString(text)) {
    return "";
  }

  return text.replace(/\{\{(\w+)\}\}/g, (match, token) => {
    if (!(token in tokens)) {
      return match;
    }

    const value = tokens[token];
    return value === null || value === undefined ? "" : String(value);
  });
}

function resolveResultProfile(blockPercent) {
  if (blockPercent >= 70) {
    return "critical";
  }

  if (blockPercent >= 45) {
    return "build";
  }

  return "advanced";
}

function getCopyForProfile(profileKey) {
  const profileCopy = RESULT_COPY_CONFIG.profiles[profileKey];
  if (profileCopy) {
    return profileCopy;
  }

  return RESULT_COPY_CONFIG.profiles[RESULT_COPY_CONFIG.fallbackProfile];
}

function getTopPriorities(limit = 1) {
  return answers
    .map((answer, index) => {
      return { answer, step: QUIZ_STEPS[index] };
    })
    .filter((item) => item.answer)
    .sort((a, b) => b.answer.pain - a.answer.pain)
    .slice(0, limit);
}

function readMapsGenerated() {
  if (!mapsGeneratedElement) {
    return "0";
  }

  const value = (mapsGeneratedElement.textContent || "").trim();
  return value || "0";
}

function buildCheckoutUrl(payload) {
  if (!isNonEmptyString(PRODUCT_CONFIG.checkoutUrl)) {
    return "";
  }

  let destination;
  try {
    destination = new URL(PRODUCT_CONFIG.checkoutUrl, window.location.origin);
  } catch (error) {
    console.warn("checkoutUrl inválida em PRODUCT_CONFIG.", error);
    return "";
  }

  destination.searchParams.set("origem", PRODUCT_CONFIG.source);
  destination.searchParams.set("resultado", payload.profileKey);
  destination.searchParams.set("bloqueio", String(payload.blockPercent));
  destination.searchParams.set("presenca", String(payload.presencePercent));
  destination.searchParams.set("pronto", String(payload.readyPercent));
  destination.searchParams.set("area", payload.topPriority);

  return destination.toString();
}

function trackCtaClick(payload) {
  const eventPayload = {
    event: PRODUCT_CONFIG.ctaEventName,
    profile: payload.profileKey,
    blockPercent: payload.blockPercent,
    presencePercent: payload.presencePercent,
    readyPercent: payload.readyPercent,
    topPriority: payload.topPriority,
    destination: payload.checkoutUrl,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", PRODUCT_CONFIG.ctaEventName, {
      profile: payload.profileKey,
      block_percent: payload.blockPercent,
      presence_percent: payload.presencePercent,
      ready_percent: payload.readyPercent,
      top_priority: payload.topPriority,
      destination: payload.checkoutUrl,
    });
  }

  window.dispatchEvent(new CustomEvent(PRODUCT_CONFIG.ctaEventName, { detail: eventPayload }));
  console.log("Quiz CTA tracking payload:", eventPayload);
}

function updateProgress() {
  const current = currentStep + 1;
  const total = QUIZ_STEPS.length + 1;
  const percent = (current / total) * 100;
  progressFill.style.width = `${percent}%`;
}

function setButtonText(button, text) {
  const particlesLayer = button.querySelector(".btn-particles");
  button.textContent = "";
  const label = document.createElement("span");
  label.className = "btn-label";
  label.textContent = text;
  button.appendChild(label);
  if (particlesLayer) {
    button.appendChild(particlesLayer);
  }
}

function getImpactMeta(optionOrAnswer) {
  const painLevel = Number(optionOrAnswer?.pain ?? 0);

  if (painLevel >= 3) {
    return { tone: "critical", label: "Ponto de atenção" };
  }

  if (painLevel === 2) {
    return { tone: "neutral", label: "Ajuste recomendado" };
  }

  return { tone: "positive", label: "Base favorável" };
}

function renderImpactLine(text, { tone = "neutral", label = "Leitura rápida", hint = false } = {}) {
  impactLine.textContent = text;
  impactLine.dataset.label = label;
  impactLine.classList.remove("tone-critical", "tone-neutral", "tone-positive", "hint");

  if (hint) {
    impactLine.classList.add("hint");
  } else {
    impactLine.classList.add(`tone-${tone}`);
  }

  impactLine.classList.add("visible");
}

function renderOptions(stepData, selectedIndex) {
  const fragment = document.createDocumentFragment();

  stepData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.dataset.index = String(index);

    const label = document.createElement("span");
    label.className = "option-label";
    label.textContent = option.label;

    const detail = document.createElement("span");
    detail.className = "option-detail";
    detail.textContent = option.detail;

    button.appendChild(label);
    button.appendChild(detail);

    if (selectedIndex === index) {
      button.classList.add("active");
    }

    fragment.appendChild(button);
  });

  optionGrid.innerHTML = "";
  optionGrid.appendChild(fragment);
}

function renderStep() {
  animateCardShift();
  const stepData = QUIZ_STEPS[currentStep];
  const selected = answers[currentStep];
  const selectedIndex = selected ? selected.optionIndex : null;

  stepLabel.textContent = `Etapa ${currentStep + 1} de ${QUIZ_STEPS.length}`;
  stepHint.textContent = stepData.hint;
  intelLine.textContent = stepData.intel;
  questionText.textContent = stepData.question;
  supportText.textContent = stepData.support;

  renderOptions(stepData, selectedIndex);
  updateProgress();

  backBtn.disabled = currentStep === 0;
  nextBtn.disabled = selectedIndex === null;
  setButtonText(nextBtn, stepData.cta);

  if (selected) {
    const impactMeta = getImpactMeta(selected);
    renderImpactLine(selected.impact, impactMeta);
  } else {
    renderImpactLine("Escolha uma opção para ver sua leitura rápida.", {
      hint: true,
      label: "Leitura do seu perfil",
    });
  }
}

function selectOption(optionIndex) {
  const stepData = QUIZ_STEPS[currentStep];
  const option = stepData.options[optionIndex];

  answers[currentStep] = {
    stepId: stepData.id,
    area: stepData.area,
    optionIndex,
    label: option.label,
    pain: option.pain,
    confidence: option.confidence,
    impact: option.impact,
  };

  const allOptions = optionGrid.querySelectorAll(".option");
  allOptions.forEach((button, idx) => {
    button.classList.toggle("active", idx === optionIndex);
  });

  const impactMeta = getImpactMeta(option);
  renderImpactLine(option.impact, impactMeta);
  nextBtn.disabled = false;
  vibrateIfAvailable(14);
}

function buildResult() {
  const totals = answers.reduce(
    (accumulator, answer) => {
      accumulator.pain += answer.pain;
      accumulator.confidence += answer.confidence;
      return accumulator;
    },
    { pain: 0, confidence: 0 },
  );

  const blockPercent = toPercent(totals.pain, MAX_PAIN);
  const presencePercent = toPercent(totals.confidence, MAX_CONFIDENCE);
  const readyPercent = Math.round((presencePercent + (100 - blockPercent)) / 2);
  const growthWindow = Math.max(0, 100 - presencePercent);
  const [topPriority] = getTopPriorities(1);
  const profileKey = resolveResultProfile(blockPercent);
  const profileCopy = getCopyForProfile(profileKey);

  const tokens = {
    blockPercent,
    presencePercent,
    readyPercent,
    growthWindow,
    topArea: topPriority ? topPriority.step.area.toLowerCase() : "seu perfil atual",
    topPriority: topPriority ? topPriority.step.id : "geral",
    mapsGenerated: readMapsGenerated(),
    limitedSpots: PRODUCT_CONFIG.limitedSpots,
    promoDeadline: getPromoDeadlineLabel(),
  };

  resultKicker.textContent = interpolateTokens(profileCopy.kicker, tokens);
  resultHeadline.textContent = interpolateTokens(profileCopy.diagnostic, tokens);
  confidenceLine.textContent = interpolateTokens(profileCopy.confidenceBase, tokens);
  objectionLine.textContent = interpolateTokens(profileCopy.consequence, tokens);
  breakLine.textContent = `${interpolateTokens(profileCopy.opportunity, tokens)} ${interpolateTokens(profileCopy.transition, tokens)} ${interpolateTokens(profileCopy.explanation, tokens)}`;
  urgencyLine.textContent = interpolateTokens(profileCopy.urgency, tokens);
  scarcityLine.textContent = interpolateTokens(profileCopy.scarcity, tokens);
  accessNote.textContent = interpolateTokens(profileCopy.accessNote, tokens);

  curiosityList.innerHTML = "";
  profileCopy.bullets.slice(0, 3).forEach((bulletText) => {
    const listItem = document.createElement("li");
    listItem.textContent = interpolateTokens(bulletText, tokens);
    curiosityList.appendChild(listItem);
  });

  setButtonText(ctaBtn, interpolateTokens(profileCopy.buttonText, tokens));
  const buttonAriaLabel = interpolateTokens(profileCopy.buttonAriaLabel, tokens);
  if (isNonEmptyString(buttonAriaLabel)) {
    ctaBtn.setAttribute("aria-label", buttonAriaLabel);
  }

  const promoMeta = promoWindow && promoWindow.expiresAt ? promoWindow : createPromoWindow(new Date());

  const payload = {
    totals,
    presencePercent,
    blockPercent,
    readyPercent,
    growthWindow,
    profileKey,
    topPriority: tokens.topPriority,
    topArea: tokens.topArea,
    promoOpenedAt: new Date(promoMeta.openedAt).toISOString(),
    promoExpiresAt: new Date(promoMeta.expiresAt).toISOString(),
    promoWindowHours: promoMeta.durationHours,
    answers,
    generatedAt: new Date().toISOString(),
  };

  payload.checkoutUrl = buildCheckoutUrl(payload);
  latestResultPayload = payload;

  console.log("Quiz diagnostic payload:", payload);
}

function showResult() {
  buildResult();
  progressFill.style.width = "100%";
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  vibrateIfAvailable([18, 30, 24]);
}

optionGrid.addEventListener("click", (event) => {
  const optionButton = event.target.closest(".option");
  if (!optionButton) {
    return;
  }

  const optionIndex = Number(optionButton.dataset.index);
  if (Number.isNaN(optionIndex)) {
    return;
  }

  selectOption(optionIndex);
});

nextBtn.addEventListener("click", () => {
  if (!answers[currentStep]) {
    return;
  }

  vibrateIfAvailable(10);

  if (currentStep < QUIZ_STEPS.length - 1) {
    currentStep += 1;
    renderStep();
    return;
  }

  showResult();
});

backBtn.addEventListener("click", () => {
  if (currentStep === 0) {
    return;
  }

  vibrateIfAvailable(8);
  currentStep -= 1;
  renderStep();
});

ctaBtn.addEventListener("click", () => {
  if (!latestResultPayload) {
    window.alert("Finalize o quiz para liberar seu plano.");
    return;
  }

  trackCtaClick(latestResultPayload);

  if (latestResultPayload.checkoutUrl) {
    window.location.href = latestResultPayload.checkoutUrl;
    return;
  }

  window.alert("Defina PRODUCT_CONFIG.checkoutUrl no script.js para enviar ao checkout.");
});

function createParticlesForButton(button) {
  const reducedMotion = prefersReducedMotion();
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  if (reducedMotion || coarsePointer || button.dataset.magnetized === "true") {
    return;
  }

  button.dataset.magnetized = "true";

  const particlesLayer = document.createElement("span");
  particlesLayer.className = "btn-particles";
  button.appendChild(particlesLayer);

  const rect = button.getBoundingClientRect();
  const particleCount = rect.width >= 280 ? 16 : rect.width >= 190 ? 12 : 8;

  const particles = [];
  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    particle.className = "btn-particle";

    const size = 2 + Math.random() * 2.4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.marginLeft = `${-size / 2}px`;
    particle.style.marginTop = `${-size / 2}px`;
    particle.style.background = index % 2 === 0 ? "#c9fff0" : "#7fffd6";

    particlesLayer.appendChild(particle);

    const angle = (Math.PI * 2 * index) / particleCount;
    const radius = Math.min(rect.width, rect.height) * 0.36 + Math.random() * 14;
    const scatterRadius = radius + 16 + Math.random() * 20;

    particles.push({
      element: particle,
      angle,
      radius,
      speed: 0.55 + Math.random() * 0.8,
      scatterX: Math.cos(angle) * scatterRadius,
      scatterY: Math.sin(angle) * scatterRadius,
      x: 0,
      y: 0,
      opacity: 0.35,
    });
  }

  const state = {
    button,
    particles,
    mode: "idle",
    pointerX: 0,
    pointerY: 0,
    scatterSince: 0,
  };

  button.addEventListener("mouseenter", () => {
    if (button.disabled) {
      return;
    }
    state.mode = "hover";
    button.classList.add("is-magnetic-hover");
  });

  button.addEventListener("mousemove", (event) => {
    if (button.disabled) {
      return;
    }

    const bounds = button.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const maxOffset = Math.max(5, Math.min(bounds.width, bounds.height) * 0.14);

    const offsetX = (event.clientX - centerX) / (bounds.width / 2);
    const offsetY = (event.clientY - centerY) / (bounds.height / 2);

    state.pointerX = Math.max(-1, Math.min(1, offsetX));
    state.pointerY = Math.max(-1, Math.min(1, offsetY));

    button.style.setProperty("--mag-x", `${state.pointerX * maxOffset}px`);
    button.style.setProperty("--mag-y", `${state.pointerY * maxOffset}px`);

    const spotX = ((event.clientX - bounds.left) / bounds.width) * 100;
    const spotY = ((event.clientY - bounds.top) / bounds.height) * 100;
    button.style.setProperty("--spot-x", `${spotX}%`);
    button.style.setProperty("--spot-y", `${spotY}%`);
  });

  button.addEventListener("mouseleave", () => {
    state.mode = "scatter";
    state.scatterSince = performance.now();
    state.pointerX = 0;
    state.pointerY = 0;
    button.classList.remove("is-magnetic-hover");
    button.style.setProperty("--mag-x", "0px");
    button.style.setProperty("--mag-y", "0px");
  });

  button.addEventListener("touchstart", () => {
    if (button.disabled) {
      return;
    }
    state.mode = "hover";
    state.pointerX = 0;
    state.pointerY = 0;
    button.classList.add("is-magnetic-hover");
  });

  button.addEventListener("touchend", () => {
    state.mode = "scatter";
    state.scatterSince = performance.now();
    button.classList.remove("is-magnetic-hover");
  });

  magneticButtons.push(state);
}

function updateMagneticButtons(now) {
  magneticButtons.forEach((item) => {
    if (item.button.disabled) {
      item.mode = "idle";
      item.pointerX = 0;
      item.pointerY = 0;
      item.button.classList.remove("is-magnetic-hover");
      item.button.style.setProperty("--mag-x", "0px");
      item.button.style.setProperty("--mag-y", "0px");
    }

    if (item.mode === "scatter" && now - item.scatterSince > 220) {
      item.mode = "idle";
    }

    item.particles.forEach((particle, index) => {
      const orbit = now * 0.001 * particle.speed + particle.angle;
      const idleX = Math.cos(orbit) * particle.radius;
      const idleY = Math.sin(orbit) * particle.radius;

      let targetX = idleX;
      let targetY = idleY;
      let targetOpacity = 0.34;

      if (item.mode === "hover") {
        targetX = idleX * 0.26 + item.pointerX * 9;
        targetY = idleY * 0.26 + item.pointerY * 9;
        targetOpacity = 0.9;
      } else if (item.mode === "scatter") {
        const scatterEase = Math.min((now - item.scatterSince) / 220, 1);
        const mix = 1 - scatterEase;
        targetX = particle.scatterX * mix;
        targetY = particle.scatterY * mix;
        targetOpacity = 0.24 * mix;
      }

      const alpha = item.mode === "hover" ? 0.24 : 0.18;
      particle.x += (targetX - particle.x) * alpha;
      particle.y += (targetY - particle.y) * alpha;
      particle.opacity += (targetOpacity - particle.opacity) * 0.22;

      particle.element.style.transform = `translate(calc(-50% + ${particle.x.toFixed(2)}px), calc(-50% + ${particle.y.toFixed(2)}px))`;
      particle.element.style.opacity = particle.opacity.toFixed(3);
      particle.element.style.filter = index % 3 === 0 ? "blur(0.8px)" : "blur(0.35px)";
    });
  });

  window.requestAnimationFrame(updateMagneticButtons);
}

function setupMagneticButtons() {
  const buttons = document.querySelectorAll(".magnet-btn");
  buttons.forEach((button) => createParticlesForButton(button));

  if (!magneticLoopStarted && magneticButtons.length > 0) {
    magneticLoopStarted = true;
    window.requestAnimationFrame(updateMagneticButtons);
  }
}

renderStep();
setupMagneticButtons();
window.setTimeout(triggerMobileIntro, 120);


