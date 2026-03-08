import { ArrowRight, RotateCcw } from "lucide-react";

import { AnimatedButton } from "@/components/ui/animated-button";

type QuizResult = {
  headline: string;
  diagnosisBullets: string[];
  keyProblem: string;
  hopeLine: string;
  ctaLabel: string;
};

type QuizResultScreenProps = {
  result: QuizResult;
  productName: string;
  spots: number;
  onCheckout: () => void;
  onRestart: () => void;
};

export function QuizResultScreen({
  result,
  productName,
  spots,
  onCheckout,
  onRestart,
}: QuizResultScreenProps) {
  return (
    <article className="rounded-3xl border border-border/80 bg-card/65 p-4 shadow-2xl backdrop-blur md:p-6">
      <p className="inline-flex rounded-full border border-border/80 bg-secondary/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-100">
        Diagnostico final
      </p>

      <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-4xl">
        {result.headline}
      </h2>

      <section className="mt-4 rounded-2xl border border-border/80 bg-secondary/40 p-4">
        <ul className="space-y-2 text-sm text-slate-100/90 sm:text-base">
          {result.diagnosisBullets.map((bullet, index) => (
            <li key={`${bullet}-${index}`} className="flex gap-2">
              <span className="mt-1 text-cyan-200">*</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-3 rounded-2xl border border-orange-300/35 bg-orange-950/25 p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-orange-200/95">
          Bloqueio detectado
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-100 sm:text-base">
          {result.keyProblem}
        </p>
      </section>

      <section className="mt-3 rounded-2xl border border-emerald-300/30 bg-emerald-950/30 p-4">
        <p className="text-sm font-bold text-emerald-200">A boa noticia:</p>
        <p className="mt-1 text-sm text-slate-100/90 sm:text-base">{result.hopeLine}</p>
      </section>

      <section className="mt-3 rounded-2xl border border-cyan-300/35 bg-gradient-to-br from-cyan-950/55 to-emerald-950/45 p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-100/95">
          Sistema recomendado
        </p>
        <h3 className="mt-1 text-xl font-extrabold">{productName}</h3>
        <p className="mt-1 text-sm text-slate-100/90">
          Um sistema direto para transformar:
        </p>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-rose-300/30 bg-rose-950/30 p-3 text-sm text-rose-100/95">
            <p>X inseguranca</p>
            <p>X presenca fraca</p>
            <p>X trava social</p>
          </div>
          <div className="rounded-xl border border-emerald-300/30 bg-emerald-950/30 p-3 text-sm text-emerald-100/95">
            <p>OK confianca</p>
            <p>OK presenca forte</p>
            <p>OK comunicacao natural</p>
          </div>
        </div>

        <p className="mt-3 text-xs text-cyan-100/85">{spots} vagas neste lote</p>
      </section>

      <section className="mt-4">
        <AnimatedButton
          onClick={onCheckout}
          size="lg"
          className="h-14 w-full justify-center gap-2 text-base font-extrabold shadow-[0_20px_44px_-18px_hsla(var(--primary)/0.85)]"
        >
          {result.ctaLabel}
          <ArrowRight className="h-5 w-5" />
        </AnimatedButton>

        <AnimatedButton
          variant="ghost"
          onClick={onRestart}
          magneticIntensity={0.2}
          className="mt-2 w-full justify-center text-sm text-muted-foreground hover:bg-muted/40"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Refazer diagnostico
        </AnimatedButton>
      </section>
    </article>
  );
}
