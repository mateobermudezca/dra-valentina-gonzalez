"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Star, CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Viajé desde Miami para hacerme el diseño de sonrisa con la Dra. Valentina y fue la mejor decisión. El trato fue de primer nivel, las instalaciones en El Poblado son hermosas y el resultado es increíblemente natural. ¡Nadie nota que tengo carillas!",
    name: "Sarah Collins",
    role: "Paciente Internacional (Miami, EE. UU.) — Diseño de Sonrisa",
    rating: 5,
    initials: "SC",
  },
  {
    quote:
      "La calidez de la doctora y su equipo te hace olvidar que estás en una clínica. Todo es muy detallado y te explican el paso a paso. Mis carillas quedaron perfectas y la atención boutique fue impecable.",
    name: "Alejandro Restrepo",
    role: "Paciente Local (Medellín) — Carillas de Alta Estética",
    rating: 5,
    initials: "AR",
  },
  {
    quote:
      "Excelente servicio y profesionalismo. Me realicé un implante dental y blanqueamiento. El proceso fue completamente cómodo y muy rápido. Se nota la formación CES y la tecnología de punta que utilizan.",
    name: "Juliana Gómez",
    role: "Paciente Local (Sabaneta) — Implante y Estética Dental",
    rating: 5,
    initials: "JG",
  },
  {
    quote:
      "I had a complete smile makeover and traveled from New York specifically for Dr. Valentina's expertise. The digital smile design process was fascinating to watch, and the final result exceeded every expectation. Truly world-class dentistry.",
    name: "Michael Thompson",
    role: "Paciente Internacional (Nueva York, EE. UU.) — Diseño de Sonrisa Completo",
    rating: 5,
    initials: "MT",
  },
  {
    quote:
      "Siempre fui insegura con mis dientes, pero desde la primera consulta supe que estaba en las mejores manos. El blanqueamiento combinado con carillas ultrafinas transformó mi sonrisa por completo. Ahora no paro de sonreír.",
    name: "Camila Vélez",
    role: "Paciente Local (Envigado) — Blanqueamiento y Carillas",
    rating: 5,
    initials: "CV",
  },
  {
    quote:
      "Hice todo mi tratamiento de ortodoncia invisible con la Dra. Valentina. El seguimiento fue impecable, los resultados llegaron incluso antes de lo esperado y la sonrisa que siempre quise hoy es una realidad. 100% recomendado.",
    name: "Felipe Mendoza",
    role: "Paciente Local (El Poblado) — Ortodoncia Invisible",
    rating: 5,
    initials: "FM",
  },
  {
    quote:
      "Perdí un diente en un accidente y estaba muy preocupado por el resultado estético del implante. La Dra. Valentina logró que el diente implantado se viera exactamente igual a mis dientes naturales. Una artista.",
    name: "David Smith",
    role: "Paciente Internacional (Londres, Reino Unido) — Implante Dental",
    rating: 5,
    initials: "DS",
  },
  {
    quote:
      "Me realizaron un diseño de sonrisa completo y el cambio fue radical pero súper natural. La Dra. Valentina entiende que cada rostro es único y eso se refleja en el resultado. La clínica es un oasis de tranquilidad.",
    name: "Laura Escobar",
    role: "Paciente Local (Medellín) — Diseño de Sonrisa y Carillas",
    rating: 5,
    initials: "LE",
  },
];

export default function Testimonials() {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: lineRef, isVisible: lineVisible } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: carouselRevealRef, isVisible: carouselVisible } = useScrollReveal<HTMLDivElement>(0.1);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidthPct, setCardWidthPct] = useState(55);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const totalCards = testimonials.length;

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 768px)");
    const update = () => {
      if (lg.matches) setCardWidthPct(55);
      else if (md.matches) setCardWidthPct(70);
      else setCardWidthPct(85);
    };
    update();
    lg.addEventListener("change", update);
    md.addEventListener("change", update);
    return () => {
      lg.removeEventListener("change", update);
      md.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const gapPx = 24;
  const cardWidth = containerWidth * (cardWidthPct / 100);
  const offset =
    -(activeIndex * (cardWidth + gapPx)) + (containerWidth - cardWidth) / 2;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalCards]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goPrev();
      else goNext();
    }
  };

  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-[#FAF7F2] selection:bg-[#C9A86C]/20 selection:text-[#1A1A1A]">
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201,168,108,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,108,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,108,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          ref={badgeRef}
          className={`flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            badgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <div
            className="h-[2px] bg-[#C9A86C] transition-all duration-700 ease-out"
            style={{ width: badgeVisible ? "40px" : "0px" }}
          />
          <span
            className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A86C]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Testimonios
          </span>
        </div>

        <h2
          className={`mt-6 font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-[#1A1A1A] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            badgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          Lo que dicen nuestros{" "}
          <span
            className="italic"
            style={{
              background:
                "linear-gradient(135deg, #C9A86C 0%, #D4AF7A 50%, #B8944F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            pacientes.
          </span>
        </h2>

        <div
          ref={lineRef}
          className="mt-8 mb-16 h-[3px] rounded-full transition-all duration-1000 ease-out"
          style={{
            width: lineVisible ? "60px" : "0px",
            background: "linear-gradient(to right, #C9A86C, transparent)",
          }}
        />

        <div
          ref={carouselRevealRef}
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div ref={containerRef} className="overflow-hidden rounded-2xl">
              <div
                className="flex gap-6 transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(${offset}px)` }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    className={`flex-shrink-0 transition-all duration-500 ease-out ${
                      i === activeIndex
                        ? "opacity-100 scale-100"
                        : "opacity-40 scale-95"
                    }`}
                    style={{ width: `${cardWidthPct}%` }}
                  >
                    <div className="group relative h-full bg-white/60 backdrop-blur-sm border border-[#C9A86C]/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/80 hover:shadow-lg hover:shadow-[#C9A86C]/5 hover:-translate-y-1 overflow-hidden">
                      <div className="absolute -bottom-10 -right-10 w-[100px] h-[100px] bg-[#C9A86C]/5 rounded-full transition-transform duration-500 scale-0 group-hover:scale-100" />

                      <Quotes
                        size={48}
                        weight="fill"
                        className="absolute top-6 right-6 text-[#C9A86C] opacity-[0.06]"
                      />

                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-[#C9A86C]/15 flex items-center justify-center font-display font-bold text-lg text-[#C9A86C] flex-shrink-0">
                          {t.initials}
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, s) => (
                            <Star
                              key={s}
                              size={16}
                              weight="fill"
                              className="text-[#C9A86C]"
                            />
                          ))}
                        </div>
                      </div>

                      <blockquote
                        className="text-base leading-relaxed text-[#4A4A4A] relative z-[1]"
                        style={{ lineHeight: "1.8" }}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>

                      <figcaption className="mt-6 pt-6 border-t border-[#C9A86C]/10 relative z-[1]">
                        <div className="font-display text-base font-bold text-[#1A1A1A]">
                          {t.name}
                        </div>
                        <div className="mt-0.5 text-xs text-[#888888] font-medium tracking-wide">
                          {t.role}
                        </div>
                      </figcaption>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={goPrev}
              className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#C9A86C]/20 items-center justify-center text-[#C9A86C] transition-all duration-300 hover:bg-[#C9A86C] hover:text-white hover:shadow-lg hover:shadow-[#C9A86C]/20"
              aria-label="Testimonio anterior"
            >
              <CaretLeft size={18} weight="bold" />
            </button>

            <button
              onClick={goNext}
              className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#C9A86C]/20 items-center justify-center text-[#C9A86C] transition-all duration-300 hover:bg-[#C9A86C] hover:text-white hover:shadow-lg hover:shadow-[#C9A86C]/20"
              aria-label="Testimonio siguiente"
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </div>

          <div
            className="flex justify-center gap-2 mt-10"
            role="tablist"
            aria-label="Navegación de testimonios"
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "w-8 bg-[#C9A86C]"
                    : "w-2 bg-[#C9A86C]/30"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
                role="tab"
                aria-selected={i === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
