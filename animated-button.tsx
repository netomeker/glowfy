import * as React from "react";

import {
  MagnetizeButton,
  type MagnetizeButtonProps,
} from "@/components/ui/magnetize-button";
import { cn } from "@/lib/utils";

export interface AnimatedButtonProps extends MagnetizeButtonProps {}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, ...props }, ref) => {
    const premiumFeedback =
      "will-change-transform transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_18px_34px_-18px_hsla(var(--primary)/0.72)]";

    return (
      <MagnetizeButton
        ref={ref}
        className={cn(premiumFeedback, className)}
        {...props}
      >
        {children}
      </MagnetizeButton>
    );
  },
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
