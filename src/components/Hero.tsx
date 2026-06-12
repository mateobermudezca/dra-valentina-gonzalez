"use client";

import Image from "next/image";
import { ArrowRight, PlayCircle } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

export default function Hero() {
  const imgRef = useReveal<HTMLDivElement>({ variant: "left" });
  const tagRef = useReveal<HTMLSpanElement>({ delay: 200 });
  const titleRef = useReveal<HTMLHeadingElement>({ delay: 350, margin: "-80px" });
  const descRef = useReveal<HTMLParagraphElement>({ delay: 500, margin: "-80px" });
  const ctaRef = useReveal<HTMLDivElement>({ delay: 650, margin: "-80px" });

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-24">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-accent/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-accent/2 blur-3xl pointer-events-none" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-20">
        {/* Left column: Doctor photo */}
        <div
          ref={imgRef}
          className="relative flex items-end md:items-center justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[3/4]">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-accent/3 to-transparent rounded-[3rem] blur-2xl" />
            <div className="relative h-full w-full">
              <Image
                src="/images/dra-logo.png"
                alt="Dra. Valentina González"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Right column: Content */}
        <div className="flex flex-col gap-8">
          <div>
            <span ref={tagRef} className="inline-flex items-center gap-2 w-fit rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Clínica Estética Boutique · Medellín
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl text-text-light dark:text-text-dark font-light"
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
            En el corazón de El Poblado, Medellín, creamos arte dental personalizado para 
            pacientes locales y de todo el mundo.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-dim px-7 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Agenda tu cita
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
              Ver resultados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
