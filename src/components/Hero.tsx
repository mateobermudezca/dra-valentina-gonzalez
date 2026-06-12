"use client";

import { ArrowRight, PlayCircle, Sparkle, Swatches, TestTube } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";
import ToothSVG from "@/components/ToothSVG";

export default function Hero() {
  const tagRef = useReveal<HTMLSpanElement>({ delay: 200 });
  const titleRef = useReveal<HTMLHeadingElement>({ delay: 350, margin: "-80px" });
  const descRef = useReveal<HTMLParagraphElement>({ delay: 500, margin: "-80px" });
  const ctaRef = useReveal<HTMLDivElement>({ delay: 650, margin: "-80px" });

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-24 flex items-center bg-surface-light-2/20 dark:bg-surface-dark/10"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/10 h-[400px] w-[400px] rounded-full bg-accent/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[140px] pointer-events-none" />

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
              className="group inline-flex items-center gap-2 rounded-full border border-accent/20 px-7 py-3.5 text-sm font-semibold text-text-light/80 dark:text-text-dark/80 transition-all hover:border-accent/40 hover:text-accent"
            >
              <PlayCircle size={18} weight="light" />
              Ver casos de éxito
            </a>
          </div>
        </div>

        {/* Right Column: Tooth Centerpiece + Badges */}
        <div className="relative flex items-center justify-center md:col-span-6 lg:col-span-5 aspect-[4/5] max-w-[400px] md:max-w-none mx-auto w-full">
          
          {/* Decorative concentric rings behind tooth */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[90%] rounded-full border border-accent/[0.04] dark:border-accent/[0.08]" />
            <div className="absolute w-[68%] h-[75%] rounded-full border border-accent/[0.07] dark:border-accent/[0.12]" />
            <div className="absolute w-[50%] h-[56%] rounded-full border border-accent/[0.10] dark:border-accent/[0.16]" />
          </div>

          {/* Tooth SVG */}
          <div className="relative w-[60%] animate-float-slow z-10">
            <ToothSVG />
          </div>

          {/* Floating Badges */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
            {/* Top Left Badge */}
            <div className="absolute top-[8%] left-[-2%] md:left-[8%] flex items-center gap-2 rounded-full bg-white/60 dark:bg-black/60 px-3 py-1.5 backdrop-blur-md border border-accent/10 dark:border-accent/15 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <Sparkle size={12} className="text-accent" weight="bold" />
              <span className="text-[10px] font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">Diseño 3D</span>
            </div>
            
            {/* Top Right Badge */}
            <div className="absolute top-[18%] right-[-2%] md:right-[5%] flex items-center gap-2 rounded-full bg-white/60 dark:bg-black/60 px-3 py-1.5 backdrop-blur-md border border-accent/10 dark:border-accent/15 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <Swatches size={12} className="text-accent" weight="bold" />
              <span className="text-[10px] font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">Porcelana</span>
            </div>

            {/* Bottom Left Badge */}
            <div className="absolute bottom-[22%] left-[-2%] md:left-[3%] flex items-center gap-2 rounded-full bg-white/60 dark:bg-black/60 px-3 py-1.5 backdrop-blur-md border border-accent/10 dark:border-accent/15 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <TestTube size={12} className="text-accent" weight="bold" />
              <span className="text-[10px] font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">Alta Gama</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
