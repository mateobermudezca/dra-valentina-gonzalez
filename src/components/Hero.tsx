"use client";

import { ArrowRight, PlayCircle, Sparkle, Swatches, TestTube } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";
import dynamic from "next/dynamic";

const Hero3DScene = dynamic(() => import("@/components/Hero3DScene"), { ssr: false });

export default function Hero() {
  const tagRef = useReveal<HTMLSpanElement>({ delay: 200 });
  const titleRef = useReveal<HTMLHeadingElement>({ delay: 350, margin: "-80px" });
  const descRef = useReveal<HTMLParagraphElement>({ delay: 500, margin: "-80px" });
  const ctaRef = useReveal<HTMLDivElement>({ delay: 650, margin: "-80px" });

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-24 flex items-center bg-[#0a0808]">
      {/* Full-bleed 3D Canvas */}
      <Hero3DScene />

      {/* Gradient overlay for text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0808]/90 via-[#0a0808]/50 to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-12 md:pt-16 w-full">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-8 md:col-span-7 lg:col-span-7">
          <div>
            <span ref={tagRef} className="inline-flex items-center gap-2 w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-widest text-white/80 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4a882] animate-pulse" />
              Estética Dental Boutique · El Poblado
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-7xl text-white font-light"
          >
            Sonrisas naturales <br />
            diseñadas para inspirar <br />
            <span className="font-bold bg-gradient-to-r from-[#c4a882] via-[#e8d5b8] to-[#c4a882] bg-clip-text text-transparent">
              confianza absoluta.
            </span>
          </h1>

          <p
            ref={descRef}
            className="max-w-lg text-base md:text-lg leading-relaxed text-white/50"
          >
            Especialistas en Diseño de Sonrisa y carillas de porcelana de alta precisión. 
            Transformamos tu expresión con arte dental y tecnología digital avanzada en Medellín.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-[#c4a882] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#d4b892] shadow-lg shadow-[#c4a882]/20"
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
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/70 transition-all hover:border-white/30 hover:text-white/90 backdrop-blur-sm"
            >
              <PlayCircle size={18} weight="light" />
              Ver casos de éxito
            </a>
          </div>
        </div>

        {/* Right Column: Badges overlay on 3D scene */}
        <div className="hidden md:block md:col-span-5 lg:col-span-5 relative h-full min-h-[400px]">
          {/* Floating Indicators / Badges */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
            {/* Top Left Badge */}
            <div className="absolute top-[10%] left-[10%] flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-1.5 backdrop-blur-md border border-white/10 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <Sparkle size={12} className="text-[#c4a882]" weight="bold" />
              <span className="text-[10px] font-semibold text-white/70 tracking-wider uppercase">Diseño 3D</span>
            </div>
            
            {/* Top Right Badge */}
            <div className="absolute top-[5%] right-[5%] flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-1.5 backdrop-blur-md border border-white/10 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <Swatches size={12} className="text-[#c4a882]" weight="bold" />
              <span className="text-[10px] font-semibold text-white/70 tracking-wider uppercase">Porcelana</span>
            </div>

            {/* Bottom Left Badge */}
            <div className="absolute bottom-[25%] left-[5%] flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-1.5 backdrop-blur-md border border-white/10 pointer-events-auto shadow-sm transition-all duration-300 hover:scale-105">
              <TestTube size={12} className="text-[#c4a882]" weight="bold" />
              <span className="text-[10px] font-semibold text-white/70 tracking-wider uppercase">Alta Gama</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0808] to-transparent pointer-events-none z-[1]" />
    </section>
  );
}
