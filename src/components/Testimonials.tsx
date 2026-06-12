"use client";

import { Quotes } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const testimonials = [
  {
    quote:
      "Viajé desde Miami para hacerme el diseño de sonrisa con la Dra. Valentina y fue la mejor decisión. El trato fue de primer nivel, las instalaciones en El Poblado son hermosas y el resultado es increíblemente natural. ¡Nadie nota que tengo carillas!",
    name: "Sarah Collins",
    role: "Paciente Internacional (Miami, EE. UU.) — Diseño de Sonrisa",
  },
  {
    quote:
      "La calidez de la doctora y su equipo te hace olvidar que estás en una clínica. Todo es muy detallado y te explican el paso a paso. Mis carillas quedaron perfectas y la atención boutique fue impecable.",
    name: "Alejandro Restrepo",
    role: "Paciente Local (Medellín) — Carillas de Alta Estética",
  },
  {
    quote:
      "Excelente servicio y profesionalismo. Me realicé un implante dental y blanqueamiento. El proceso fue completamente cómodo y muy rápido. Se nota la formación CES y la tecnología de punta que utilizan.",
    name: "Juliana Gómez",
    role: "Paciente Local (Sabaneta) — Implante y Estética Dental",
  },
];

export default function Testimonials() {
  const headerRef = useReveal<HTMLDivElement>({ margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-surface-light-2/30 dark:bg-surface-dark/10">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={headerRef} className="mb-16 text-center">
          <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            Testimonios
          </span>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl text-text-light dark:text-text-dark font-light">
            Opiniones de nuestros <br className="hidden md:inline" />
            <span className="font-bold text-accent">pacientes.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ testimonial, index }: { testimonial: (typeof testimonials)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>({ delay: index * 120, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="relative rounded-3xl border border-accent/5 bg-surface-light-2/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/15 hover:shadow-lg hover:shadow-accent/5 dark:bg-surface-mid/50"
    >
      <Quotes size={28} weight="fill" className="mb-4 text-accent/20" />
      <blockquote className="text-sm leading-relaxed text-text-light/65 dark:text-text-dark/65">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-accent/10 pt-4">
        <div className="font-display text-sm font-bold text-text-light dark:text-text-dark">
          {testimonial.name}
        </div>
        <div className="mt-0.5 text-xs text-text-light/50 dark:text-text-dark/50 font-medium">
          {testimonial.role}
        </div>
      </figcaption>
    </div>
  );
}
