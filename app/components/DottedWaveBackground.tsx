"use client";

import { useEffect, useRef } from "react";

export default function DottedWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const draw = () => {
      const isDark = mediaQuery.matches;

      ctx.fillStyle = isDark ? "#fff" : "#fff";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = isDark ? "#fff" : "#fff";

      const spacing = 12;
      const amplitude = 25;
      const frequency = 0.002;

      for (let y = height * 0.35; y < height * 0.65; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const wave =
            Math.sin(x * frequency + time) *
            Math.cos(y * frequency + time);

          ctx.beginPath();
          ctx.arc(x, y + wave * amplitude, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 0.02;
      requestAnimationFrame(draw);
    };

    draw();

    mediaQuery.addEventListener("change", draw);

    return () => {
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}
