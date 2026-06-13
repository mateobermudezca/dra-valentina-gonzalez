"use client";

import { ArrowRight, PlayCircle, Circle } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";
import dynamic from "next/dynamic";
import { useRef, useCallback } from "react";

const Hero3DScene = dynamic(() => import("@/components/Hero3DScene"), { ssr: false });

export default function Hero() {
  const tagRef = useReveal<HTMLSpanElement>({ delay: 200 });
  const titleRef = useReveal<HTMLHeadingElement>({ delay: 350, margin: "-80px" });
  const descRef = useReveal<HTMLParagraphElement>({ delay: 500, margin: "-80px" });
  const ctaRef = useReveal<HTMLDivElement>({ delay: 650, margin: "-80px" });

  const logoRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    logoRef.current.style.setProperty("--rotate-x", `${-y * 20}deg`);
    logoRef.current.style.setProperty("--rotate-y", `${x * 20}deg`);
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (!logoRef.current) return;
    logoRef.current.style.setProperty("--rotate-x", "0deg");
    logoRef.current.style.setProperty("--rotate-y", "0deg");
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-24 flex items-center"
    >
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-[2]" aria-hidden="true" style={{ background: "linear-gradient(to bottom, rgba(219,211,191,0.25) 0%, transparent 100%)" }} />

      {/* Hero 3D Scene Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Hero3DScene />
      </div>

      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/10 h-[400px] w-[400px] rounded-full bg-accent/2 blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/10 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[140px] pointer-events-none z-[1]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-12 md:pt-16 w-full relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-8 md:col-span-6 lg:col-span-7">
          <div>
            <span
              ref={tagRef}
              className="inline-flex items-center gap-2 w-fit rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Estética Dental Boutique · El Poblado
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-7xl text-text-light font-light"
          >
            Sonrisas naturales <br />
            diseñadas para inspirar <br />
            <span className="font-bold text-accent">confianza absoluta.</span>
          </h1>

          <p
            ref={descRef}
            className="max-w-lg text-base md:text-lg leading-relaxed text-text-light/65"
          >
            Especialistas en Diseño de Sonrisa y carillas de porcelana de alta precisión.
            Transformamos tu expresión con arte dental y tecnología digital avanzada en Medellín.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dim shadow-lg shadow-accent/10"
            >
              Agenda tu consulta
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
                weight="bold"
              />
            </a>
            <a
              href="#galeria"
              className="group inline-flex items-center gap-2 rounded-full border border-accent/20 px-7 py-3.5 text-sm font-semibold text-text-light/80 transition-all hover:border-accent/40 hover:text-accent"
            >
              <PlayCircle size={18} weight="light" />
              Ver casos de éxito
            </a>
          </div>
        </div>

        {/* Right Column: Tooth Images + Badges */}
        <div className="relative flex items-center justify-center md:col-span-6 lg:col-span-5 aspect-[4/5] max-w-[400px] md:max-w-none mx-auto w-full">
          
          {/* Decorative concentric rings behind tooth */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[90%] rounded-full border border-accent/[0.04]" />
            <div className="absolute w-[68%] h-[75%] rounded-full border border-accent/[0.07]" />
            <div className="absolute w-[50%] h-[56%] rounded-full border border-accent/[0.10]" />
          </div>

          {/* Logo with 3D Tilt & Dramatic Glow */}
          <div
            ref={logoRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[65%] z-10"
            style={{ perspective: "1200px" }}
          >
            {/* Dramatic background glow layers */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full aspect-square rounded-full bg-accent/15 blur-[80px] scale-150 animate-pulse-glow" />
              <div className="absolute w-[70%] aspect-square rounded-full bg-accent/10 blur-[60px] scale-125" />
            </div>

            {/* Logo with 3D transform and float */}
            <div
              className="relative animate-float-slow"
              style={{
                transform: "rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) scale(1)",
                transition: "transform 0.15s ease-out",
              }}
            >
              <img
                src="/images/logo-texto.png"
                alt="Dra. Valentina González"
                className="w-full h-auto"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(196, 168, 130, 0.25)) drop-shadow(0 0 80px rgba(196, 168, 130, 0.15)) drop-shadow(0 20px 60px rgba(0,0,0,0.1))",
                }}
              />
            </div>
          </div>

          {/* Orbiting Particles */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 origin-center"
                style={{
                  width: 0,
                  height: 0,
                  animation: `orbit ${6 + i * 0.8}s linear infinite`,
                  animationDelay: `${-i * 0.6}s`,
                }}
              >
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: `${4 + (i % 3) * 2}px`,
                    height: `${4 + (i % 3) * 2}px`,
                    background: i % 2 === 0 ? "#c4a882" : "#e8d5b8",
                    opacity: 0.5 - i * 0.05,
                    left: `${55 + i * 8}%`,
                    top: 0,
                    boxShadow: i % 2 === 0 ? "0 0 6px rgba(196,168,130,0.5)" : "0 0 4px rgba(232,213,184,0.3)",
                  }}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
