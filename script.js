const PRODUCT_CONFIG = {
  name: "Metodo Glowup 21",
  pitch:
    "Plano direto para corrigir os bloqueios detectados no seu mapa e transformar presenca em resultado real.",
  offer:
    "Voce recebe passo a passo curto, acompanhamento de inicio e estrutura para nao voltar ao ciclo de tentativa e erro.",
  cta: "Quero meu plano agora",
  checkoutUrl: "#",
  totalSpots: 27,
};

const ENTRY_HEADLINE_VARIANTS = [
  "No role, voce impoe presenca ou se apaga?",
  "Quando voce chega, sua energia cresce ou se esconde?",
  "Qual versao sua assume o controle quando voce entra no ambiente?",
  "Voce ocupa espaco ou desaparece em silencio?",
  "Sua presenca atrai ou pede permissao?",
];

const selectedEntryHeadline =
  ENTRY_HEADLINE_VARIANTS[Math.floor(Math.random() * ENTRY_HEADLINE_VARIANTS.length)];

const QUIZ_STEPS = [
  {
    id: "entry",
    area: "Entrada social",
    hint: "Descubra seu bloqueio principal",
    intel: "Resposta usada para mapear seu eixo de presenca",
    cta: "Descobrir meu padrao",
    question: selectedEntryHeadline,
    support:
      "Essa resposta revela se sua energia social abre portas ou te apaga antes da primeira conexao.",
    options: [
      {
        label: "Me escondo no celular ate alguem puxar assunto.",
        detail: "Evito me expor para nao passar vergonha.",
        pain: 4,
        confidence: 1,
        impact:
          "Padrao detectado: presenca defensiva. Voce perde oportunidades antes mesmo de comecar.",
      },
      {
        label: "Fico perto de alguem conhecido e evito arriscar.",
        detail: "Interajo no seguro, sem abrir espaco para novas conexoes.",
        pain: 3,
        confidence: 2,
        impact:
          "Padrao detectado: socializacao limitada. Falta amplitude para gerar novas oportunidades.",
      },
      {
        label: "Demoro para me soltar, mas depois entro no clima.",
        detail: "Preciso de tempo para sentir confianca no ambiente.",
        pain: 2,
        confidence: 3,
        impact:
          "Padrao detectado: aquecimento lento. Voce cresce no meio do jogo, mas perde o inicio.",
      },
      {
        label: "Chego leve, converso e nao fico me policiando.",
        detail: "Consigo entrar no ambiente com naturalidade e presenca.",
        pain: 1,
        confidence: 4,
        impact:
          "Padrao detectado: entrada forte. Sua presenca inicial ja joga a seu favor.",
      },
    ],
  },
  {
    id: "image",
    area: "Imagem percebida",
    hint: "Mapa em andamento",
    intel: "Etapa usada para calcular impacto de imagem",
    cta: "Ver proximo traco",
    question: "Quando voce olha para sua imagem hoje, qual frase te define melhor?",
    support:
      "Aqui aparece o quanto seu visual reforca sua confianca ou entrega inseguranca sem voce perceber.",
    options: [
      {
        label: "Meu visual quase nunca representa quem eu quero ser.",
        detail: "Sinto que passo uma versao menor do que realmente sou.",
        pain: 4,
        confidence: 1,
        impact:
          "Padrao detectado: identidade visual fraca. Isso derruba presenca e autoconfianca.",
      },
      {
        label: "Faco o basico, mas ainda pareco comum demais.",
        detail: "Nao esta ruim, mas falta assinatura e intencao.",
        pain: 3,
        confidence: 2,
        impact:
          "Padrao detectado: visual sem diferencial. Voce some no meio da multidao.",
      },
      {
        label: "Tenho pontos fortes, mas falta consistencia.",
        detail: "Acerto em alguns dias, em outros volto para o improviso.",
        pain: 2,
        confidence: 3,
        impact:
          "Padrao detectado: resultado oscilante. Falta metodo para repetir o que funciona.",
      },
      {
        label: "Meu visual passa seguranca e combina comigo.",
        detail: "Tenho clareza do que funciona para minha imagem.",
        pain: 1,
        confidence: 4,
        impact:
          "Padrao detectado: base visual forte. Seu proximo salto vem de refinamento de detalhes.",
      },
    ],
  },
  {
    id: "conversation",
    area: "Conducao de conversa",
    hint: "Calculando seu bloqueio social",
    intel: "Resposta usada para mapear fluidez de comunicacao",
    cta: "Continuar diagnostico",
    question: "Quando voce conversa com alguem que te interessa, o que costuma acontecer?",
    support:
      "Esse ponto mostra se voce cria conexao real ou deixa oportunidades morrerem no meio do papo.",
    options: [
      {
        label: "Travo, respondo pouco e o assunto morre rapido.",
        detail: "Fico tenso e tento terminar logo para nao errar.",
        pain: 4,
        confidence: 1,
        impact:
          "Padrao detectado: bloqueio de expressao. Sua mensagem nao chega com forca suficiente.",
      },
      {
        label: "Comeco bem, mas perco direcao no meio da conversa.",
        detail: "A abertura funciona, mas nao sei conduzir para conexao.",
        pain: 3,
        confidence: 2,
        impact:
          "Padrao detectado: continuidade fraca. Voce abre portas, mas nao sustenta interesse.",
      },
      {
        label: "Converso bem, mas ainda fico me policiando demais.",
        detail: "Tem fluidez, porem falta espontaneidade em momentos-chave.",
        pain: 2,
        confidence: 3,
        impact:
          "Padrao detectado: comunicacao moderada. Ajustes de timing elevam seu impacto rapido.",
      },
      {
        label: "Conduzo com naturalidade e crio conexao com facilidade.",
        detail: "Consigo manter ritmo e presenca durante a interacao.",
        pain: 1,
        confidence: 4,
        impact:
          "Padrao detectado: comunicacao forte. Seu foco agora e escalar consistencia.",
      },
    ],
  },
  {
    id: "initiative",
    area: "Iniciativa",
    hint: "Consolidando sua confianca",
    intel: "Etapa usada para mapear comportamento de acao",
    cta: "Avancar no mapa",
    question: "Quando aparece uma chance real de conexao, qual atitude voce toma?",
    support:
      "Esta resposta mostra se voce lidera sua vida social ou deixa o medo escolher por voce.",
    options: [
      {
        label: "Adio e quase nunca tomo atitude.",
        detail: "Fico preso no 'depois eu vejo' e saio frustrado.",
        pain: 4,
        confidence: 1,
        impact:
          "Padrao detectado: paralisia por inseguranca. Voce perde oportunidades antes de testar.",
      },
      {
        label: "Tento no online, mas travo para levar ao presencial.",
        detail: "Inicio existe, mas falta conversao para vida real.",
        pain: 3,
        confidence: 2,
        impact:
          "Padrao detectado: ponte quebrada entre digital e presencial.",
      },
      {
        label: "Ajo em algumas situacoes, mas ainda oscilo.",
        detail: "Tem iniciativa, porem sem consistencia em todos os contextos.",
        pain: 2,
        confidence: 3,
        impact:
          "Padrao detectado: acao intermitente. Falta repeticao para virar padrao forte.",
      },
      {
        label: "Tomo atitude com calma e sem me sabotar.",
        detail: "Consigo transformar interesse em movimento real.",
        pain: 1,
        confidence: 4,
        impact:
          "Padrao detectado: iniciativa madura. Voce ja joga no ataque com controle.",
      },
    ],
  },
  {
    id: "consistency",
    area: "Consistencia diaria",
    hint: "Ultima etapa do mapa",
    intel: "Seu perfil final esta sendo montado em tempo real",
    cta: "Ver meu mapa final",
    question: "Qual nivel de compromisso voce topa pelos proximos 21 dias?",
    support:
      "Essa escolha define a velocidade da sua evolucao: sem consistencia, qualquer resultado vira acaso.",
    options: [
      {
        label: "So faco se for quando eu lembrar.",
        detail: "Nao consigo manter rotina com frequencia.",
        pain: 4,
        confidence: 1,
        impact:
          "Padrao detectado: execucao fragil. Sem repeticao, seu glow up nao se sustenta.",
      },
      {
        label: "Consigo fazer, mas costumo falhar alguns dias.",
        detail: "Tenho vontade, mas a disciplina quebra no meio.",
        pain: 3,
        confidence: 2,
        impact:
          "Padrao detectado: consistencia instavel. O resultado vem, mas nao fixa.",
      },
      {
        label: "Consigo manter 10 minutos por dia.",
        detail: "Tenho rotina curta e consigo seguir com regularidade.",
        pain: 2,
        confidence: 3,
        impact:
          "Padrao detectado: boa base de execucao. Ajustes simples aceleram seu ritmo.",
      },
      {
        label: "Consigo manter 15 minutos por dia com foco.",
        detail: "Tenho disciplina para aplicar sem enrolacao.",
        pain: 1,
        confidence: 4,
        impact:
          "Padrao detectado: consistencia alta. Melhor cenario para evolucao rapida.",
      },
    ],
  },
];

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

const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const presenceScore = document.getElementById("presenceScore");
const blockScore = document.getElementById("blockScore");
const readyScore = document.getElementById("readyScore");
const coreBlock = document.getElementById("coreBlock");
const futureRisk = document.getElementById("futureRisk");
const diagnosticList = document.getElementById("diagnosticList");
const productName = document.getElementById("productName");
const productPitch = document.getElementById("productPitch");
const offerLine = document.getElementById("offerLine");
const spotsBadge = document.getElementById("spotsBadge");

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
const MOBILE_QUERY = "(max-width: 720px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

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
  // Reflow para reiniciar a animacao sem recriar elementos.
  void quizCard.offsetWidth;
  quizCard.classList.add("switching");
}

function toPercent(value, maxValue) {
  if (!maxValue) {
    return 0;
  }

  return Math.round((value / maxValue) * 100);
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
    impactLine.textContent = selected.impact;
    impactLine.classList.add("visible");
  } else {
    impactLine.textContent = "Escolha uma opcao para continuar.";
    impactLine.classList.add("visible");
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

  impactLine.textContent = option.impact;
  impactLine.classList.add("visible");
  nextBtn.disabled = false;
  vibrateIfAvailable(14);
}

function renderDiagnosticList() {
  const priorities = answers
    .map((answer, index) => {
      return { answer, step: QUIZ_STEPS[index] };
    })
    .sort((a, b) => b.answer.pain - a.answer.pain)
    .slice(0, 3);

  diagnosticList.innerHTML = "";

  priorities.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.step.area}: ${item.answer.impact}`;
    diagnosticList.appendChild(listItem);
  });

  return priorities[0];
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

  const topPriority = renderDiagnosticList();

  let level = "";
  let summary = "";
  let coreText = "";
  let riskText = "";
  let offerText = "";

  if (blockPercent >= 70) {
    level = "Perfil em alerta: potencial alto com bloqueio dominante";
    summary =
      "Seu mapa aponta um padrao que reduz sua presenca antes mesmo do jogo social comecar. Isso e ajustavel com estrategia certa.";
    coreText = `Seu maior ponto cego esta em ${topPriority.step.area.toLowerCase()}. Hoje esse fator puxa sua confianca para baixo nos momentos mais importantes.`;
    riskText =
      "Sem um plano guiado, os proximos meses tendem a repetir o mesmo ciclo: inseguranca, adiamento e arrependimento.";
    offerText =
      "A janela ideal para virar esse cenario e agora: metodo simples, execucao curta e foco no que realmente muda comportamento.";
  } else if (blockPercent >= 45) {
    level = "Perfil em evolucao: base boa, faltam ajustes de consistencia";
    summary =
      "Voce ja tem tracos fortes, mas ainda oscila em pontos que derrubam seu impacto social quando a situacao exige.";
    coreText = `Seu principal ajuste esta em ${topPriority.step.area.toLowerCase()}. Com calibragem certa, esse ponto deixa de te frear e passa a trabalhar a seu favor.`;
    riskText =
      "Sem refinamento, seus resultados ficam aleatorios: dias bons alternam com recaidas que atrasam sua evolucao.";
    offerText =
      "Com um mapa aplicado ao seu perfil, voce troca tentativa e erro por progressao clara, curta e mensuravel.";
  } else {
    level = "Perfil forte: pronto para acelerar acima da media";
    summary =
      "Seu mapa mostra boa base de presenca e confianca. Seu proximo salto depende de refinamento estrategico, nao de comecar do zero.";
    coreText = `Seu ponto de otimizacao esta em ${topPriority.step.area.toLowerCase()}. Ajustando esse eixo, seu impacto sobe de forma perceptivel.`;
    riskText =
      "Sem direcao, voce continua bem, mas cresce abaixo do que poderia e perde tempo em melhorias pouco eficientes.";
    offerText =
      "Com orientacao certa, voce encurta meses de tentativa e erro e transforma boa base em nivel de referencia.";
  }

  resultTitle.textContent = level;
  resultSummary.textContent = summary;
  presenceScore.textContent = `${presencePercent}%`;
  blockScore.textContent = `${blockPercent}%`;
  readyScore.textContent = `${readyPercent}%`;
  coreBlock.textContent = coreText;
  futureRisk.textContent = riskText;
  productName.textContent = PRODUCT_CONFIG.name;
  productPitch.textContent = PRODUCT_CONFIG.pitch;
  spotsBadge.textContent = `${PRODUCT_CONFIG.totalSpots} vagas neste lote`;
  offerLine.textContent = `${offerText} Janela estimada de evolucao: ${growthWindow}%. ${PRODUCT_CONFIG.offer}`;
  setButtonText(ctaBtn, PRODUCT_CONFIG.cta);

  const payload = {
    totals,
    presencePercent,
    blockPercent,
    readyPercent,
    topPriority: topPriority.step.id,
    answers,
    generatedAt: new Date().toISOString(),
  };

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
  if (PRODUCT_CONFIG.checkoutUrl && PRODUCT_CONFIG.checkoutUrl !== "#") {
    window.location.href = PRODUCT_CONFIG.checkoutUrl;
    return;
  }

  window.alert(
    "Defina PRODUCT_CONFIG.checkoutUrl no script.js para enviar ao checkout ou WhatsApp.",
  );
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
