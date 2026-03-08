import * as React from "react";
import { ArrowRight, ChevronLeft } from "lucide-react";

import { AnimatedButton } from "@/components/ui/animated-button";
import { QuizResultScreen } from "@/components/ui/quiz-result-screen";
import { cn } from "@/lib/utils";

type QuizOption = {
  label: string;
  detail: string;
  pain: number;
  confidence: number;
  impact: string;
};

type QuizStep = {
  id: string;
  area: string;
  hint: string;
  intelligenceCopy: string;
  cta: string;
  question: string;
  support: string;
  options: QuizOption[];
};

type SelectedAnswer = {
  stepId: string;
  area: string;
  optionIndex: number;
  pain: number;
  confidence: number;
  impact: string;
};

type ResultData = {
  headline: string;
  diagnosisBullets: string[];
  keyProblem: string;
  hopeLine: string;
  ctaLabel: string;
};

const ENTRY_HEADLINE_VARIANTS = [
  "No role, voce impoe presenca ou se apaga?",
  "Quando voce chega, sua energia cresce ou se esconde?",
  "Qual versao sua assume o controle quando voce entra no ambiente?",
  "Voce ocupa espaco ou desaparece em silencio?",
  "Sua presenca atrai ou pede permissao?",
];

const PRODUCT = {
  name: "Metodo Glowup 21",
  checkoutUrl: "#",
  spots: 27,
};

const toPercent = (value: number, maxValue: number) => {
  if (!maxValue) {
    return 0;
  }
  return Math.round((value / maxValue) * 100);
};

function createSteps(entryHeadline: string): QuizStep[] {
  return [
    {
      id: "entry",
      area: "Entrada social",
      hint: "Etapa usada para mapear sua energia inicial",
      intelligenceCopy: "Analisando padrao de presenca em primeiro contato",
      cta: "Descobrir meu padrao",
      question: entryHeadline,
      support:
        "Essa resposta mostra se sua energia abre conexoes ou se voce se apaga antes da primeira interacao.",
      options: [
        {
          label: "Me escondo no celular ate alguem puxar assunto.",
          detail: "Evito me expor para nao parecer deslocado.",
          pain: 4,
          confidence: 1,
          impact:
            "Presenca defensiva detectada. Voce se protege, mas perde oportunidades no inicio.",
        },
        {
          label: "Fico perto de conhecido e evito arriscar.",
          detail: "Interajo no seguro, sem ampliar meu circulo.",
          pain: 3,
          confidence: 2,
          impact:
            "Padrao de socializacao limitada detectado. Falta expansao de conexoes novas.",
        },
        {
          label: "Demoro para me soltar, mas depois entro no clima.",
          detail: "Preciso de aquecimento para ganhar naturalidade.",
          pain: 2,
          confidence: 3,
          impact:
            "Padrao de aquecimento lento detectado. Voce entra bem, mas perde o timing inicial.",
        },
        {
          label: "Chego leve, converso e nao fico me policiando.",
          detail: "Consigo entrar com naturalidade e presenca.",
          pain: 1,
          confidence: 4,
          impact:
            "Padrao de entrada forte detectado. Sua presenca inicial ja favorece a conexao.",
        },
      ],
    },
    {
      id: "image",
      area: "Imagem percebida",
      hint: "Etapa usada para calcular peso de imagem na confianca",
      intelligenceCopy: "Seu eixo de atracao visual esta sendo calculado",
      cta: "Ver proximo traco",
      question: "Hoje, sua imagem reforca sua confianca ou te sabota em silencio?",
      support:
        "Sua aparencia nao precisa ser perfeita, mas precisa comunicar seguranca, direcao e identidade.",
      options: [
        {
          label: "Meu visual quase nunca representa quem eu quero ser.",
          detail: "Sinto que passo uma versao menor de mim.",
          pain: 4,
          confidence: 1,
          impact:
            "Identidade visual fraca detectada. Isso diminui impacto e autoconfianca.",
        },
        {
          label: "Faco o basico, mas ainda pareco comum demais.",
          detail: "Nao esta ruim, mas falta intencao e assinatura.",
          pain: 3,
          confidence: 2,
          impact:
            "Visual sem diferencial detectado. Voce se mistura e perde destaque.",
        },
        {
          label: "Tenho dias bons, mas sem consistencia.",
          detail: "Acerto em alguns momentos e em outros improviso.",
          pain: 2,
          confidence: 3,
          impact:
            "Oscilacao de imagem detectada. Falta sistema para repetir o que funciona.",
        },
        {
          label: "Minha imagem comunica seguranca e combina comigo.",
          detail: "Tenho clareza do que valoriza meu perfil.",
          pain: 1,
          confidence: 4,
          impact:
            "Base visual forte detectada. Seu proximo salto esta em refinamento de detalhes.",
        },
      ],
    },
    {
      id: "conversation",
      area: "Conducao de conversa",
      hint: "Etapa usada para mapear fluidez de comunicacao",
      intelligenceCopy: "Seu perfil de conversa esta sendo processado",
      cta: "Continuar diagnostico",
      question: "No papo com alguem interessante, voce conduz ou deixa morrer?",
      support:
        "Aqui aparece o ponto onde muita gente boa perde conexao por falta de direcao e ritmo.",
      options: [
        {
          label: "Travo, respondo pouco e o assunto morre rapido.",
          detail: "Fico tenso e encurto a conversa para nao errar.",
          pain: 4,
          confidence: 1,
          impact:
            "Bloqueio de expressao detectado. Sua mensagem nao chega com forca.",
        },
        {
          label: "Comeco bem, mas perco direcao no meio.",
          detail: "A abertura funciona, porem nao sustento interesse.",
          pain: 3,
          confidence: 2,
          impact:
            "Continuidade fraca detectada. Voce abre bem, mas nao consolida conexao.",
        },
        {
          label: "Converso bem, mas ainda me policio demais.",
          detail: "Tenho fluidez, mas falta espontaneidade em pontos-chave.",
          pain: 2,
          confidence: 3,
          impact:
            "Comunicacao moderada detectada. Ajustes de timing elevam muito seu impacto.",
        },
        {
          label: "Conduzo com naturalidade e crio conexao com facilidade.",
          detail: "Mantenho ritmo, interesse e presenca no papo.",
          pain: 1,
          confidence: 4,
          impact:
            "Comunicacao forte detectada. Seu foco deve ser escalar consistencia.",
        },
      ],
    },
    {
      id: "initiative",
      area: "Iniciativa",
      hint: "Etapa usada para calcular nivel de acao social",
      intelligenceCopy: "Seu indice de iniciativa esta sendo atualizado",
      cta: "Avancar no mapa",
      question: "Quando aparece uma chance real, voce toma atitude ou adia?",
      support:
        "Esse ponto define se voce lidera sua vida social ou continua refem da hesitacao.",
      options: [
        {
          label: "Adio e quase nunca tomo atitude.",
          detail: "Fico no 'depois eu vejo' e saio frustrado.",
          pain: 4,
          confidence: 1,
          impact:
            "Paralisia por inseguranca detectada. Oportunidades acabam antes de voce testar.",
        },
        {
          label: "Tento no online, mas travo para levar ao presencial.",
          detail: "Inicio existe, mas falta conversao para vida real.",
          pain: 3,
          confidence: 2,
          impact:
            "Ponte quebrada entre digital e presencial detectada.",
        },
        {
          label: "Ajo em algumas situacoes, mas ainda oscilo.",
          detail: "Tem iniciativa, porem sem repeticao consistente.",
          pain: 2,
          confidence: 3,
          impact:
            "Acao intermitente detectada. Falta consistencia para virar padrao forte.",
        },
        {
          label: "Tomo atitude com calma e sem me sabotar.",
          detail: "Transformo interesse em movimento real.",
          pain: 1,
          confidence: 4,
          impact:
            "Iniciativa madura detectada. Voce joga no ataque com controle.",
        },
      ],
    },
    {
      id: "consistency",
      area: "Consistencia diaria",
      hint: "Ultima etapa: seu mapa final sera liberado",
      intelligenceCopy: "Seu perfil final esta sendo consolidado",
      cta: "Ver meu mapa final",
      question: "Quanto voce topa investir por dia para destravar em 21 dias?",
      support:
        "A velocidade do glow up depende de rotina curta e repeticao. Sem isso, tudo vira tentativa.",
      options: [
        {
          label: "So faco quando lembrar.",
          detail: "Nao consigo manter rotina com frequencia.",
          pain: 4,
          confidence: 1,
          impact:
            "Execucao fragil detectada. Sem repeticao, a mudanca nao sustenta.",
        },
        {
          label: "Consigo fazer, mas falho varios dias.",
          detail: "Tenho vontade, mas a disciplina quebra no meio.",
          pain: 3,
          confidence: 2,
          impact:
            "Consistencia instavel detectada. O resultado vem, mas nao fixa.",
        },
        {
          label: "Consigo manter 10 minutos por dia.",
          detail: "Tenho rotina curta e frequencia razoavel.",
          pain: 2,
          confidence: 3,
          impact:
            "Boa base de execucao detectada. Pequenos ajustes aceleram seu ritmo.",
        },
        {
          label: "Consigo manter 15 minutos por dia com foco.",
          detail: "Tenho disciplina para aplicar sem enrolacao.",
          pain: 1,
          confidence: 4,
          impact:
            "Consistencia alta detectada. Melhor cenario para evolucao rapida.",
        },
      ],
    },
  ];
}

function buildResult(steps: QuizStep[], answers: SelectedAnswer[]): ResultData {
  const maxPain = steps.reduce((sum, step) => {
    return sum + Math.max(...step.options.map((option) => option.pain));
  }, 0);

  const totals = answers.reduce(
    (accumulator, answer) => {
      accumulator.pain += answer.pain;
      return accumulator;
    },
    { pain: 0 },
  );

  const blockPercent = toPercent(totals.pain, maxPain);

  const topPriorities = [...answers]
    .sort((a, b) => b.pain - a.pain)
    .slice(0, 2);

  const mainArea = topPriorities[0]?.area ?? "Entrada social";
  const secondaryArea = topPriorities[1]?.area ?? "Conducao de conversa";

  const keyProblemByArea: Record<string, string> = {
    "Entrada social":
      "Falta direcao pratica no seu primeiro contato. Voce chega sem plano e perde impacto no inicio.",
    "Imagem percebida":
      "Sua imagem ainda nao sustenta a confianca que voce tem por dentro. A mensagem chega fraca.",
    "Conducao de conversa":
      "Falta estrutura para manter conversa com presenca. O interesse cai no meio do caminho.",
    Iniciativa:
      "Voce pensa demais e age de menos. As melhores oportunidades passam antes da sua atitude.",
    "Consistencia diaria":
      "Sem sistema diario, voce melhora por impulso e recai logo depois.",
  };

  let headline = "Seu potencial e alto. O problema e a direcao.";
  if (blockPercent < 45) {
    headline = "Seu problema nao e capacidade. E falta de direcao.";
  } else if (blockPercent < 70) {
    headline = "Voce tem potencial acima da media. Mas esta sem sistema.";
  }

  return {
    headline,
    diagnosisBullets: [
      "Voce tem potencial para evoluir rapido.",
      `Mas hoje ${mainArea.toLowerCase()} e ${secondaryArea.toLowerCase()} ainda te travam.`,
      "Isso derruba presenca, confianca e impacto.",
    ],
    keyProblem:
      keyProblemByArea[mainArea] ??
      "Falta um caminho claro para evoluir presenca, imagem e comunicacao.",
    hopeLine:
      "Esse padrao e corrigivel quando voce segue um sistema claro e direto.",
    ctaLabel: "Quero ativar meu glow up",
  };
}

export default function App() {
  const [headline] = React.useState(
    () =>
      ENTRY_HEADLINE_VARIANTS[
        Math.floor(Math.random() * ENTRY_HEADLINE_VARIANTS.length)
      ],
  );

  const steps = React.useMemo(() => createSteps(headline), [headline]);

  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Array<SelectedAnswer | null>>(
    () => new Array(steps.length).fill(null),
  );
  const [result, setResult] = React.useState<ResultData | null>(null);

  const activeStep = steps[currentStep];
  const selectedAnswer = answers[currentStep];
  const progress = result
    ? 100
    : ((currentStep + 1) / (steps.length + 1)) * 100;

  const handleSelectOption = React.useCallback(
    (option: QuizOption, optionIndex: number) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[currentStep] = {
          stepId: activeStep.id,
          area: activeStep.area,
          optionIndex,
          pain: option.pain,
          confidence: option.confidence,
          impact: option.impact,
        };
        return next;
      });
    },
    [activeStep.area, activeStep.id, currentStep],
  );

  const handleNext = React.useCallback(() => {
    if (!selectedAnswer) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    const completeAnswers = answers.filter(
      (answer): answer is SelectedAnswer => answer !== null,
    );
    if (completeAnswers.length !== steps.length) {
      return;
    }

    setResult(buildResult(steps, completeAnswers));
  }, [answers, currentStep, selectedAnswer, steps]);

  const handleBack = React.useCallback(() => {
    if (currentStep === 0) {
      return;
    }
    setCurrentStep((prev) => prev - 1);
  }, [currentStep]);

  const handleRestart = React.useCallback(() => {
    setAnswers(new Array(steps.length).fill(null));
    setCurrentStep(0);
    setResult(null);
  }, [steps.length]);

  const handleCheckout = React.useCallback(() => {
    if (PRODUCT.checkoutUrl && PRODUCT.checkoutUrl !== "#") {
      window.location.href = PRODUCT.checkoutUrl;
      return;
    }

    window.alert(
      "Defina PRODUCT.checkoutUrl em src/App.tsx para enviar ao checkout ou WhatsApp.",
    );
  }, []);

  return (
    <div className="ambient-gradient relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -left-20 top-[8%] h-56 w-56 rounded-full bg-cyan-400/20 blur-sm animate-float" />
        <span className="absolute -right-24 top-[38%] h-64 w-64 rounded-full bg-emerald-400/15 blur-sm animate-float [animation-delay:1.3s]" />
        <span className="absolute bottom-[-72px] left-[28%] h-48 w-48 rounded-full bg-sky-300/15 blur-sm animate-float [animation-delay:2.2s]" />
      </div>

      <main className="relative mx-auto w-full max-w-4xl px-3 pb-10 pt-4 sm:px-6">
        <header className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-extrabold lowercase tracking-[0.02em]">
              glowup lab
            </p>
            <p className="mt-1 max-w-[34ch] text-xs text-muted-foreground sm:text-sm">
              Diagnostico social para destravar presenca, confianca e atracao.
            </p>
          </div>
          <p className="w-fit rounded-full border border-border/80 bg-secondary/70 px-3 py-2 text-xs text-muted-foreground sm:text-sm">
            <strong className="font-extrabold text-foreground">12.487</strong>{" "}
            diagnosticos concluidos
          </p>
        </header>

        {!result ? (
          <article className="rounded-3xl border border-border/80 bg-card/60 p-4 shadow-2xl backdrop-blur md:p-6">
            <section className="rounded-2xl border border-border/80 bg-secondary/45 p-3 md:p-4">
              <div className="mb-2 grid gap-1 sm:flex sm:items-center sm:justify-between">
                <p className="text-sm font-bold text-foreground">
                  Etapa {currentStep + 1} de {steps.length}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activeStep.hint}
                </p>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted/80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-cyan-200/90">
                {activeStep.intelligenceCopy}
              </p>
            </section>

            <section className="mt-4">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-200/90">
                Diagnostico em tempo real
              </p>
              <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                {activeStep.question}
              </h1>
              <p className="mt-3 max-w-3xl text-sm text-slate-200/85 sm:text-base">
                {activeStep.support}
              </p>
            </section>

            <section className="mt-4 grid gap-2.5">
              {activeStep.options.map((option, index) => {
                const isActive = selectedAnswer?.optionIndex === index;
                return (
                  <button
                    key={`${activeStep.id}-${index}`}
                    type="button"
                    onClick={() => handleSelectOption(option, index)}
                    className={cn(
                      "group w-full rounded-2xl border px-4 py-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      "hover:-translate-y-0.5",
                      isActive
                        ? "border-emerald-300/90 bg-gradient-to-br from-cyan-950/75 to-emerald-950/65 shadow-[0_0_0_2px_rgba(65,245,167,0.22)]"
                        : "border-border/80 bg-slate-950/35 hover:border-cyan-300/60",
                    )}
                  >
                    <span className="block text-sm font-bold text-foreground sm:text-base">
                      {option.label}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">
                      {option.detail}
                    </span>
                  </button>
                );
              })}
            </section>

            <p className="mt-3 min-h-10 border-l-2 border-orange-300/80 pl-3 text-xs text-orange-200/90 sm:text-sm">
              {selectedAnswer
                ? selectedAnswer.impact
                : "Selecione a opcao que mais representa seu comportamento hoje."}
            </p>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-[150px_1fr]">
              <AnimatedButton
                variant="ghost"
                magneticIntensity={0.18}
                disabled={currentStep === 0}
                onClick={handleBack}
                className="border border-border/60 text-muted-foreground hover:bg-muted/40"
              >
                <ChevronLeft className="mr-1.5 h-4 w-4" />
                Voltar
              </AnimatedButton>

              <AnimatedButton
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="w-full justify-between text-sm sm:text-base"
              >
                {activeStep.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Sem cadastro. Cada resposta atualiza seu mapa de confianca e atracao.
            </p>
          </article>
        ) : (
          <QuizResultScreen
            result={result}
            productName={PRODUCT.name}
            spots={PRODUCT.spots}
            onCheckout={handleCheckout}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}
