"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { ArrowsLeftRight } from "@phosphor-icons/react";

const cases = [
  {
    id: "caso-1",
    title: "Diseño de Sonrisa en Porcelana",
    description: "Corrección de apiñamiento leve, asimetría de bordes y cambio de tono a blanco natural.",
    before: "/images/gallery-5.jpg",
    after: "/images/gallery-2.jpg",
  },
  {
    id: "caso-2",
    title: "Carillas Cerámicas E-Max",
    description: "Microdiseño dental ultra-delgado para mejorar el contorno y lograr armonía facial estética.",
    before: "/images/gallery-3.jpg",
    after: "/images/gallery-4.jpg",
  },
  {
    id: "caso-3",
    title: "Rehabilitación Estética Integral",
    description: "Transformación funcional y estética completa, devolviendo la luminosidad natural a la sonrisa.",
    before: "/images/gallery-5.jpg",
    after: "/images/gallery-6.jpg",
  },
];

export default function Gallery() {
  const headerRef = useReveal<HTMLDivElement>({ margin: "-100px" });
  const sliderSectionRef = useReveal<HTMLDivElement>({ margin: "-80px" });
  const gridSectionRef = useReveal<HTMLDivElement>({ margin: "-80px" });

  // Slider State (Featured Case 1)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="galeria" className="relative py-28 md:py-36 bg-surface-light-2/30 dark:bg-surface-dark/10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            Casos de Éxito
          </span>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl text-text-light dark:text-text-dark font-light">
            Historias escritas en <br className="hidden md:inline" />
            <span className="font-bold text-accent">cada sonrisa.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-light/60 dark:text-text-dark/60">
            Descubre las transformaciones reales de nuestros pacientes. Resultados naturales que devuelven la seguridad.
          </p>
        </div>

        {/* Featured Interactive Slider */}
        <div ref={sliderSectionRef} className="mb-20">
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-semibold tracking-wider text-accent/80 uppercase">
              Caso Destacado: Desliza para comparar
            </span>
          </div>

          <div
            ref={containerRef}
            className="relative mx-auto aspect-[16/10] max-w-4xl overflow-hidden rounded-[2rem] border border-accent/10 bg-surface-light-2 shadow-xl select-none dark:bg-surface-mid"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full Background) */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={cases[0].after}
                alt="Después - Diseño de Sonrisa"
                fill
                className="object-cover"
                draggable={false}
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <span className="absolute bottom-4 right-4 z-10 rounded-lg bg-surface-dark/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                Después
              </span>
            </div>

            {/* Before Image (Clipped Width) */}
            <div
              className="absolute inset-y-0 left-0 z-20 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative h-full w-[100vw] max-w-4xl aspect-[16/10]">
                {/* Fixed width matching parent limit so image doesn't scale as width changes */}
                <div className="absolute inset-0 h-full w-full" style={{ width: containerRef.current?.getBoundingClientRect().width || "896px" }}>
                  <Image
                    src={cases[0].before}
                    alt="Antes - Diseño de Sonrisa"
                    fill
                    className="object-cover"
                    draggable={false}
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />
                </div>
                <span className="absolute bottom-4 left-4 z-10 rounded-lg bg-surface-dark/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Antes
                </span>
              </div>
            </div>

            {/* Handle Line */}
            <div
              className="absolute inset-y-0 z-30 w-[2px] bg-white cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Handle Button */}
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/20 border border-white/20">
                <ArrowsLeftRight size={18} weight="bold" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Cases Crossfade Grid */}
        <div ref={gridSectionRef}>
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-wider text-accent/80 uppercase">
              Galería de Resultados (Pasa el cursor o toca para revelar)
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {cases.map((c, idx) => (
              <CrossfadeCard key={c.id} c={c} delay={idx * 150} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function CrossfadeCard({ c, delay }: { c: (typeof cases)[number]; delay: number }) {
  const ref = useReveal<HTMLDivElement>({ delay, margin: "-80px" });
  const [active, setActive] = useState(false);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl border border-accent/5 bg-surface-light-2/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/15 dark:bg-surface-mid/50"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(!active)}
    >
      {/* Visual Box */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Antes (Under) */}
        <Image
          src={c.before}
          alt={`Antes - ${c.title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-102"
          sizes="(max-width: 768px) 100vw, 30vw"
        />
        <div className="absolute inset-0 bg-surface-dark/10" />

        {/* Después (Over, with Opacity Toggle) */}
        <div
          className="absolute inset-0 h-full w-full transition-opacity duration-500"
          style={{ opacity: active ? 1 : 0 }}
        >
          <Image
            src={c.after}
            alt={`Después - ${c.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/30 via-transparent to-transparent" />
        </div>

        {/* Labels */}
        <div className="absolute top-3 right-3 z-10 flex gap-1.5">
          <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase transition-all duration-350 ${
            !active ? "bg-accent text-white" : "bg-white/25 text-white backdrop-blur-sm"
          }`}>
            Antes
          </span>
          <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase transition-all duration-350 ${
            active ? "bg-accent text-white" : "bg-white/25 text-white backdrop-blur-sm"
          }`}>
            Después
          </span>
        </div>
      </div>

      {/* Description Box */}
      <div className="p-6 space-y-2">
        <h3 className="font-display text-lg font-bold text-text-light dark:text-text-dark">
          {c.title}
        </h3>
        <p className="text-xs leading-relaxed text-text-light/60 dark:text-text-dark/60">
          {c.description}
        </p>
      </div>
    </div>
  );
}
