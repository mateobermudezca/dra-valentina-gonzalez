"use client";

import Image from "next/image";
import { Sparkle, Swatches, TestTube } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const services = [
  {
    icon: Sparkle,
    title: "Diseño de Sonrisa",
    description:
      "Planificación digital personalizada donde cada proporción, color y forma se estudia para armonizar con tu rostro y personalidad.",
    image: "/images/gallery-2.jpg",
    features: ["Análisis facial 3D", "Mock-up digital", "Prueba estética previa"],
  },
  {
    icon: Swatches,
    title: "Carillas Dentales",
    description:
      "Láminas ultrafinas de porcelana que corrigen forma, color y alineación. Una solución mínimamente invasiva con resultados espectaculares.",
    image: "/images/gallery-3.jpg",
    features: ["Porcelana de alta resistencia", "Color personalizado", "Resultado natural"],
  },
  {
    icon: TestTube,
    title: "Implantes Dentales",
    description:
      "Reemplazo de raíces dentales con tecnología de vanguardia. Recupera la función y estética de tu sonrisa con implantes de última generación.",
    image: "/images/gallery-4.jpg",
    features: ["Titanio biocompatible", "Carga inmediata", "Garantía de por vida"],
  },
];

export default function Services() {
  const headerRef = useReveal<HTMLDivElement>({ margin: "-100px" });

  return (
    <section id="servicios" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            Tratamientos
          </span>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl">
            Cada sonrisa tiene su propio{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
              plan maestro
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-light/60 dark:text-text-dark/60">
            Desde el diagnóstico digital hasta el resultado final, cada paso está diseñado para ti.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Card key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>({ delay: index * 150, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl border border-accent/5 bg-surface-light-2/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 dark:bg-surface-mid/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md">
          <service.icon size={14} className="text-accent" weight="bold" />
          <span className="text-xs font-medium text-white">{service.title}</span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-sm leading-relaxed text-text-light/60 dark:text-text-dark/60">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-xs font-medium text-text-light/50 dark:text-text-dark/50"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
