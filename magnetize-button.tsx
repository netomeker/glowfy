import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type InteractionMode = "idle" | "hover" | "scatter";

type ParticleSeed = {
  id: number;
  angle: number;
  radius: number;
  duration: number;
  delay: number;
  size: number;
  scatterX: number;
  scatterY: number;
  color: string;
};

export interface MagnetizeButtonProps
  extends ButtonProps {
  magneticIntensity?: number;
  minParticles?: number;
  maxParticles?: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const pseudoRandom = (seed: number) => {
  const sine = Math.sin(seed * 12.9898) * 43758.5453;
  return sine - Math.floor(sine);
};

export const MagnetizeButton = React.forwardRef<
  HTMLButtonElement,
  MagnetizeButtonProps
>(
  (
    {
      asChild = false,
      className,
      children,
      variant,
      size,
      magneticIntensity = 0.35,
      minParticles = 8,
      maxParticles = 16,
      disabled = false,
      ...props
    },
    forwardedRef,
  ) => {
    const containerRef = React.useRef<HTMLSpanElement>(null);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const scatterTimerRef = React.useRef<number | null>(null);
    const reducedMotion = useReducedMotion();

    const [interaction, setInteraction] =
      React.useState<InteractionMode>("idle");
    const [buttonSize, setButtonSize] = React.useState({ width: 140, height: 44 });

    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const x = useSpring(pointerX, { stiffness: 260, damping: 22, mass: 0.45 });
    const y = useSpring(pointerY, { stiffness: 260, damping: 22, mass: 0.45 });

    React.useImperativeHandle(forwardedRef, () => buttonRef.current as HTMLButtonElement);

    React.useEffect(() => {
      const node = containerRef.current;
      if (!node || typeof ResizeObserver === "undefined") {
        return;
      }

      const updateSize = () => {
        const rect = node.getBoundingClientRect();
        setButtonSize((prev) => {
          const next = {
            width: Math.max(1, Math.round(rect.width)),
            height: Math.max(1, Math.round(rect.height)),
          };

          if (next.width === prev.width && next.height === prev.height) {
            return prev;
          }
          return next;
        });
      };

      updateSize();

      const observer = new ResizeObserver(() => {
        updateSize();
      });

      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
      return () => {
        if (scatterTimerRef.current) {
          window.clearTimeout(scatterTimerRef.current);
        }
      };
    }, []);

    const particleCount = React.useMemo(() => {
      if (reducedMotion) {
        return 0;
      }

      const area = buttonSize.width * buttonSize.height;
      const scaled = Math.round(area / 2400);
      return clamp(scaled, minParticles, maxParticles);
    }, [buttonSize.height, buttonSize.width, maxParticles, minParticles, reducedMotion]);

    const particles = React.useMemo<ParticleSeed[]>(() => {
      return Array.from({ length: particleCount }, (_, index) => {
        const randomA = pseudoRandom(index + particleCount);
        const randomB = pseudoRandom(index * 2 + 17);
        const randomC = pseudoRandom(index * 3 + 29);
        const randomD = pseudoRandom(index * 5 + 43);

        const angle = (Math.PI * 2 * index) / Math.max(1, particleCount);
        const radius =
          Math.max(12, Math.min(buttonSize.width, buttonSize.height) * 0.5) +
          randomA * 18;
        const scatterLength = radius + 14 + randomB * 22;
        const hue = 160 + randomC * 40;

        return {
          id: index,
          angle,
          radius,
          duration: 3.6 + randomB * 2.2,
          delay: randomA * 0.5,
          size: 2 + randomD * 2.8,
          scatterX: Math.cos(angle) * scatterLength,
          scatterY: Math.sin(angle) * scatterLength,
          color: `hsla(${hue}, 98%, 70%, 0.9)`,
        };
      });
    }, [buttonSize.height, buttonSize.width, particleCount]);

    const resetToIdle = React.useCallback(() => {
      if (scatterTimerRef.current) {
        window.clearTimeout(scatterTimerRef.current);
      }

      scatterTimerRef.current = window.setTimeout(() => {
        setInteraction("idle");
      }, 220);
    }, []);

    const handleMouseEnter = React.useCallback(() => {
      if (disabled || reducedMotion) {
        return;
      }

      if (scatterTimerRef.current) {
        window.clearTimeout(scatterTimerRef.current);
      }
      setInteraction("hover");
    }, [disabled, reducedMotion]);

    const handleMouseMove = React.useCallback(
      (event: React.MouseEvent<HTMLSpanElement>) => {
        if (disabled || reducedMotion) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = event.clientX - centerX;
        const offsetY = event.clientY - centerY;
        const maxTravel = Math.max(6, Math.min(rect.width, rect.height) * 0.16);
        const normalizedX = clamp(offsetX / (rect.width / 2), -1, 1);
        const normalizedY = clamp(offsetY / (rect.height / 2), -1, 1);

        pointerX.set(normalizedX * maxTravel * magneticIntensity);
        pointerY.set(normalizedY * maxTravel * magneticIntensity);
      },
      [disabled, magneticIntensity, pointerX, pointerY, reducedMotion],
    );

    const handleMouseLeave = React.useCallback(() => {
      pointerX.set(0);
      pointerY.set(0);

      if (disabled || reducedMotion) {
        return;
      }

      setInteraction("scatter");
      resetToIdle();
    }, [disabled, pointerX, pointerY, reducedMotion, resetToIdle]);

    const handleTouchStart = React.useCallback(() => {
      if (disabled || reducedMotion) {
        return;
      }

      if (scatterTimerRef.current) {
        window.clearTimeout(scatterTimerRef.current);
      }
      setInteraction("hover");
    }, [disabled, reducedMotion]);

    const handleTouchEnd = React.useCallback(() => {
      pointerX.set(0);
      pointerY.set(0);

      if (disabled || reducedMotion) {
        return;
      }

      setInteraction("scatter");
      resetToIdle();
    }, [disabled, pointerX, pointerY, reducedMotion, resetToIdle]);

    const Comp = asChild ? Slot : "button";

    return (
      <motion.span
        ref={containerRef}
        style={reducedMotion ? undefined : { x, y }}
        className="relative inline-flex shrink-0"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-visible"
        >
          {particles.map((particle) => {
            const idleX = [
              Math.cos(particle.angle) * particle.radius,
              Math.cos(particle.angle + Math.PI / 2) * particle.radius,
              Math.cos(particle.angle + Math.PI) * particle.radius,
              Math.cos(particle.angle + (Math.PI * 3) / 2) * particle.radius,
              Math.cos(particle.angle + Math.PI * 2) * particle.radius,
            ];
            const idleY = [
              Math.sin(particle.angle) * particle.radius,
              Math.sin(particle.angle + Math.PI / 2) * particle.radius,
              Math.sin(particle.angle + Math.PI) * particle.radius,
              Math.sin(particle.angle + (Math.PI * 3) / 2) * particle.radius,
              Math.sin(particle.angle + Math.PI * 2) * particle.radius,
            ];

            const animate =
              interaction === "hover"
                ? {
                    x: Math.cos(particle.angle) * particle.radius * 0.2,
                    y: Math.sin(particle.angle) * particle.radius * 0.2,
                    scale: 1.15,
                    opacity: 0.95,
                  }
                : interaction === "scatter"
                  ? {
                      x: particle.scatterX,
                      y: particle.scatterY,
                      scale: 0.3,
                      opacity: 0,
                    }
                  : {
                      x: idleX,
                      y: idleY,
                      scale: [0.8, 1.05, 0.8],
                      opacity: [0.32, 0.75, 0.32],
                    };

            const transition =
              interaction === "hover"
                ? {
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                    mass: 0.5,
                  }
                : interaction === "scatter"
                  ? {
                      duration: 0.24,
                      ease: "easeOut",
                    }
                  : {
                      duration: particle.duration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: particle.delay,
                    };

            return (
              <motion.span
                key={particle.id}
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 rounded-full blur-[0.5px]"
                style={{
                  width: particle.size,
                  height: particle.size,
                  marginLeft: -particle.size / 2,
                  marginTop: -particle.size / 2,
                  backgroundColor: particle.color,
                }}
                animate={animate}
                transition={transition}
              />
            );
          })}
        </span>

        <Comp
          ref={asChild ? undefined : buttonRef}
          className={cn(
            buttonVariants({ variant, size }),
            "relative z-10",
            className,
          )}
          disabled={asChild ? undefined : disabled}
          {...props}
        >
          {children}
        </Comp>
      </motion.span>
    );
  },
);

MagnetizeButton.displayName = "MagnetizeButton";
