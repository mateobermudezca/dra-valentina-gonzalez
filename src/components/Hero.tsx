"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, PlayCircle, Sparkle, Swatches, TestTube } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const tagRef = useReveal<HTMLSpanElement>({ delay: 200 });
  const titleRef = useReveal<HTMLHeadingElement>({ delay: 350, margin: "-80px" });
  const descRef = useReveal<HTMLParagraphElement>({ delay: 500, margin: "-80px" });
  const ctaRef = useReveal<HTMLDivElement>({ delay: 650, margin: "-80px" });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Normalized coordinates from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    // Rotation values (max 20 degrees)
    setRotate({
      x: -mouseY * 20,
      y: mouseX * 20,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-24 flex items-center bg-surface-light-2/20 dark:bg-surface-dark/10">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/10 h-[400px] w-[400px] rounded-full bg-accent/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[140px] pointer-events-none" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-12 md:pt-16 w-full relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-8 md:col-span-6 lg:col-span-7">
          <div>
            <span ref={tagRef} className="inline-flex items-center gap-2 w-fit rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Estética Dental Boutique · El Poblado
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-7xl text-text-light dark:text-text-dark font-light"
          >
            Sonrisas naturales <br />
            diseñadas para inspirar <br />
            <span className="font-bold text-accent">confianza absoluta.</span>
          </h1>

          <p
            ref={descRef}
            className="max-w-lg text-base md:text-lg leading-relaxed text-text-light/65 dark:text-text-dark/65"
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
              className="group inline-flex items-center gap-2 rounded-full border border-accent/20 px-7 py-3.5 text-sm font-semibold text-text-light/80 transition-all hover:border-accent/40 hover:text-accent dark:text-text-dark/80"
            >
              <PlayCircle size={18} weight="light" />
              Ver casos de éxito
            </a>
          </div>
        </div>

        {/* Right Column: 3D Centerpiece */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center justify-center md:col-span-6 lg:col-span-5 aspect-square max-w-[450px] md:max-w-none mx-auto w-full group cursor-grab"
        >
          {/* Backdrop Large Text */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05] transition-transform duration-500 group-hover:scale-105">
            <div className="font-display text-[9rem] md:text-[12rem] font-bold tracking-widest text-text-light dark:text-text-dark rotate-90 md:rotate-0">
              CLINIC
            </div>
          </div>

          {/* 3D Perspective Orbital Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible">
            {/* Horizontal-ish perspective orbits */}
            <div 
              className="absolute w-[115%] h-[40%] rounded-full border border-accent/15 dark:border-accent/10 animate-[spin_25s_linear_infinite]" 
              style={{ transform: "rotateX(72deg) rotateY(8deg)" }}
            />
            <div 
              className="absolute w-[95%] h-[30%] rounded-full border border-accent/20 dark:border-accent/15 animate-[spin_15s_linear_infinite_reverse]" 
              style={{ transform: "rotateX(72deg) rotateY(-8deg)" }}
            />
          </div>

          {/* Floating Indicators / Badges with Lines (Connected style) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
            {/* Top Left Badge */}
            <div className="absolute top-[10%] left-[-5%] md:left-[5%] flex items-center gap-2 rounded-full bg-white/60 dark:bg-black/60 px-3 py-1.5 backdrop-blur-md border border-accent/10 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <Sparkle size={12} className="text-accent" weight="bold" />
              <span className="text-[10px] font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">Diseño 3D</span>
            </div>
            
            {/* Top Right Badge */}
            <div className="absolute top-[20%] right-[-5%] md:right-[0%] flex items-center gap-2 rounded-full bg-white/60 dark:bg-black/60 px-3 py-1.5 backdrop-blur-md border border-accent/10 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <Swatches size={12} className="text-accent" weight="bold" />
              <span className="text-[10px] font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">Porcelana</span>
            </div>

            {/* Bottom Left Badge */}
            <div className="absolute bottom-[20%] left-[-5%] md:left-[0%] flex items-center gap-2 rounded-full bg-white/60 dark:bg-black/60 px-3 py-1.5 backdrop-blur-md border border-accent/10 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <TestTube size={12} className="text-accent" weight="bold" />
              <span className="text-[10px] font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">Alta Gama</span>
            </div>
          </div>

          {/* Main 3D Tooth Centerpiece */}
          <div
            className="relative w-[65%] aspect-square animate-float-slow z-10 select-none pointer-events-none transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
          >
            <Image
              src="/images/3d-tooth.png"
              alt="Estética Dental 3D - Diente de porcelana prístina"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(var(--color-accent),0.15)] filter saturate-[0.95]"
              priority
              sizes="(max-width: 768px) 60vw, 35vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
