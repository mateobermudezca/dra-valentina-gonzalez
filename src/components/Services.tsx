"use client";

import Image from "next/image";
import { Sparkle, Swatches, TestTube, Globe } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const services = [
  {
    icon: Sparkle,
    title: "Diseño de Sonrisa Natural",
    description:
      "Planificación digital personalizada donde estudiamos cada proporción, color y forma para armonizar con tus rasgos faciales y resaltar tu belleza natural.",
    image: "/images/gallery-2.jpg",
    features: ["Análisis facial y dental 3D", "Maqueta estética (Mock-up) en boca", "Planificación guiada por computador"],
    gridSpan: "col-span-12 md:col-span-7",
    isLarge: true,
  },
  {
    icon: Swatches,
    title: "Carillas de Alta Gama",
    description:
      "Láminas ultra finas de porcelana o resina estratificada que corrigen imperfecciones de color, forma y alineación sin dañar tu esmalte natural.",
    image: "/images/gallery-3.jpg",
    features: ["Porcelana E-max de alta resistencia", "Estratificación de resina artesanal", "Acabado traslúcido y natural"],
    gridSpan: "col-span-12 md:col-span-5",
    isLarge: false,
  },
  {
    icon: TestTube,
    title: "Implantes & Rehabilitación",
    description:
      "Recupera la funcionalidad y la estética completa de tu sonrisa. Utilizamos implantes biocompatibles premium con técnicas de carga inmediata.",
    image: "/images/gallery-4.jpg",
    features: ["Implantes de titanio biocompatible", "Coronas estéticas sobre implantes", "Cirugía guiada mínimamente invasiva"],
    gridSpan: "col-span-12 md:col-span-5",
    isLarge: false,
  },
  {
    icon: Globe,
    title: "Experiencia Internacional VIP",
    description:
      "Facilitamos tu viaje dental a Medellín. Ofrecemos asesoría en hospedaje en El Poblado, transporte privado desde el aeropuerto y videoconsultas de pre-diagnóstico gratis.",
    image: "/images/gallery-6.jpg",
    features: ["Pre-diagnóstico virtual gratuito", "Convenios con hoteles de lujo", "Logística y traslados privados"],
    gridSpan: "col-span-12 md:col-span-7",
    isLarge: true,
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
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl text-text-light font-light">
            Cada sonrisa tiene su propio <br className="hidden md:inline" />
            <span className="font-bold text-accent">plan maestro.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-light/60">
            Desde el diagnóstico digital en El Poblado hasta el resultado final, creamos armonía a tu medida.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {services.map((service, i) => (
            <Card key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>({ delay: index * 120, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-3xl border border-accent/5 bg-surface-light-2/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 flex flex-col ${service.gridSpan} ${
        service.isLarge ? "md:flex-row" : ""
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden w-full ${
          service.isLarge ? "aspect-[16/10] md:aspect-auto md:w-1/2 min-h-[220px] md:min-h-full" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes={service.isLarge ? "(max-width: 768px) 100vw, 35vw" : "(max-width: 768px) 100vw, 25vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent md:bg-gradient-to-t md:from-surface-dark/50 md:via-transparent md:to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/10">
          <service.icon size={14} className="text-accent" weight="bold" />
          <span className="text-xs font-semibold text-white">{service.title}</span>
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`flex flex-col justify-between space-y-4 p-6 md:p-8 ${
          service.isLarge ? "w-full md:w-1/2" : "w-full"
        }`}
      >
        <div className="space-y-3">
          <h3 className="font-display text-xl font-bold text-text-light">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-text-light/65">
            {service.description}
          </p>
        </div>
        
        <ul className="space-y-2 pt-2">
          {service.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-xs font-semibold text-text-light/50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
