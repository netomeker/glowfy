import { ArrowRight, Sparkles, UnlockKeyhole, UserRoundSearch } from "lucide-react";

import { MagnetizeButton } from "@/components/ui/magnetize-button";

export function MagnetizeButtonDemo() {
  return (
    <section className="rounded-2xl border border-border/70 bg-card/40 p-4 backdrop-blur">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Magnetize Buttons Demo
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <MagnetizeButton size="lg" className="w-full justify-between transition-transform duration-200 hover:scale-[1.02]">
          Start Diagnosis
          <ArrowRight className="h-4 w-4" />
        </MagnetizeButton>
        <MagnetizeButton variant="secondary" className="w-full justify-between transition-transform duration-200 hover:scale-[1.02]">
          Continue
          <Sparkles className="h-4 w-4" />
        </MagnetizeButton>
        <MagnetizeButton className="w-full justify-between transition-transform duration-200 hover:scale-[1.02]">
          Unlock My Plan
          <UnlockKeyhole className="h-4 w-4" />
        </MagnetizeButton>
        <MagnetizeButton variant="outline" className="w-full justify-between transition-transform duration-200 hover:scale-[1.02]">
          Generate My Profile
          <UserRoundSearch className="h-4 w-4" />
        </MagnetizeButton>
      </div>
    </section>
  );
}
