"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  intensity?: "subtle" | "medium" | "high";
}

export function AnimatedGradientMesh({ className, intensity = "medium" }: AnimatedGradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      // Scale for retina displays to ensure crispness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      time += intensity === "subtle" ? 0.001 : intensity === "medium" ? 0.002 : 0.004;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      // Clinical Soft Mint / Deep Navy palette mapping via JS
      // In a real WebGL implementation, this would map directly to CSS vars.
      // Here we simulate the smooth, slow-moving mesh with radial gradients.

      const gradient1 = ctx.createRadialGradient(
        width * (0.5 + Math.sin(time) * 0.3), height * (0.5 + Math.cos(time * 0.8) * 0.3), 0,
        width * 0.5, height * 0.5, width * 0.8
      );
      gradient1.addColorStop(0, "hsla(160, 40%, 90%, 0.4)"); // Mint tint
      gradient1.addColorStop(1, "transparent");

      const gradient2 = ctx.createRadialGradient(
        width * (0.5 + Math.cos(time * 1.2) * 0.4), height * (0.5 + Math.sin(time * 0.9) * 0.4), 0,
        width * 0.5, height * 0.5, width * 0.8
      );
      gradient2.addColorStop(0, "hsla(250, 40%, 95%, 0.3)"); // Slate tint
      gradient2.addColorStop(1, "transparent");

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-20 transition-opacity duration-1000",
        className
      )}
      style={{
        // Fallback for prefers-reduced-motion
        background: "radial-gradient(circle at center, var(--primary) 0%, transparent 100%)",
        opacity: 0.05
      }}
      aria-hidden="true"
    />
  );
}