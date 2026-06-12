"use client";

import { Quotes } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const testimonials = [
  {
    quote:
      "Nunca pensé que mi sonrisa pudiera cambiar tanto. El equipo de la Dra. Valentina entendió exactamente lo que quería desde la primera consulta. El resultado superó todas mis expectativas.",
    name: "María Fernanda R.",
    role: "Paciente — Diseño de Sonrisa",
  },
  {
    quote:
      "Tenía miedo al dentista desde pequeña. La Dra. Valentina hizo todo el proceso tan cómodo y transparente que ahora hasta disfruto ir a mis citas. Mis carillas quedaron espectaculares.",
    name: "Andrea C.",
    role: "Paciente — Carillas Dentales",
  },
  {
    quote:
      "Perdí un diente en un accidente y pensé que nunca volvería a sonreír con confianza. El implante que me colocaron se siente tan natural que olvido que no es mi diente original.",
    name: "Carlos M.",
    role: "Paciente — Implante Dental",
  },
];

export default function Testimonials() {
  const headerRef = useReveal<HTMLDivElement>({ margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={headerRef} className="mb-16 text-center">
          <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            Testimonios
          </span>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
              pacientes
            </span>
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
  const ref = useReveal<HTMLDivElement>({ delay: index * 150, margin: "-80px" });

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
        <div className="mt-0.5 text-xs text-text-light/50 dark:text-text-dark/50">
          {testimonial.role}
        </div>
      </figcaption>
    </div>
  );
}
