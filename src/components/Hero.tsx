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
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-20">
        <div
          ref={imgRef}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <Image
            src="/images/gallery-1.jpg"
            alt="Dra. Valentina González"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col gap-8">
          <span ref={tagRef} className="inline-block w-fit rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            Estética Dental de Precisión
          </span>

          <h1
            ref={titleRef}
            className="font-display text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            Tu sonrisa es la{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
              firma de tu rostro
            </span>
          </h1>

          <p
            ref={descRef}
            className="max-w-lg text-lg leading-relaxed text-text-light/60 dark:text-text-dark/60"
          >
            Transformamos tu expresión con diseño digital de sonrisa, carillas e implantes
            de alta precisión. Cada detalle importa cuando se trata de tu imagen.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dim"
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
