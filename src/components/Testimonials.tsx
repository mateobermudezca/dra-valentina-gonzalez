"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Quotes } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SCROLL_SPEED = 0.8;

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
  const { ref: lineRef2, isVisible: lineVisible2 } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: copyRef, isVisible: copyVisible } = useScrollReveal<HTMLParagraphElement>(0.15);
  const { ref: btnRef, isVisible: btnVisible } = useScrollReveal<HTMLDivElement>(0.15);

  const [cardWidthPct, setCardWidthPct] = useState(55);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const cardWidthRef = useRef(0);
  const halfTrackRef = useRef(0);

  const duplicated = [...testimonials, ...testimonials];
  const totalCards = testimonials.length;
  const gapPx = 24;

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 768px)");
    const update = () => {
      if (lg.matches) setCardWidthPct(38);
      else if (md.matches) setCardWidthPct(52);
      else setCardWidthPct(72);
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

  const cardWidth = containerWidth * (cardWidthPct / 100);
  const halfTrack = totalCards * (cardWidth + gapPx);

  useEffect(() => {
    cardWidthRef.current = cardWidth;
    halfTrackRef.current = halfTrack;
  }, [cardWidth, halfTrack]);

  useEffect(() => {
    const animate = () => {
      if (!isPausedRef.current) {
        offsetRef.current += SCROLL_SPEED;
        if (offsetRef.current >= halfTrackRef.current) {
          offsetRef.current = 0;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [halfTrack]);

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
            className="relative select-none"
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
            onTouchStart={() => { isPausedRef.current = true; }}
            onTouchEnd={() => {
              setTimeout(() => { isPausedRef.current = false; }, 800);
            }}
          >
            <div
                ref={containerRef}
                className="overflow-hidden rounded-2xl"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                }}
              >
              <div
                ref={trackRef}
                className="flex gap-6 will-change-transform"
                style={{ transform: "translateX(0px)" }}
              >
                {duplicated.map((t, i) => (
                  <div
                    key={`${t.name}-${i}`}
                    className="flex-shrink-0"
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
          </div>

          <div
            ref={lineRef2}
            className={`mt-16 mb-6 h-[2px] rounded-full mx-auto transition-all duration-1000 ease-out ${
              lineVisible2 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: lineVisible2 ? "80px" : "0px",
              background: "linear-gradient(to right, transparent, #C9A86C, transparent)",
              transitionDelay: "600ms",
            }}
          />

          <p
            ref={copyRef}
            className={`text-center text-base md:text-lg text-[#888888] max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              copyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "750ms", fontFamily: "var(--font-body)" }}
          >
            Cada sonrisa que transformamos es nuestra mejor carta de presentación.{" "}
            <span className="font-semibold text-[#C9A86C]">
              Tú puedes ser la próxima.
            </span>
          </p>

          <div
            ref={btnRef}
            className={`flex justify-center mt-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              btnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <a
              href="https://search.google.com/local/writereview?placeid=0x8e4429000f8f5345:0x6d1d54d8f119b03b"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A86C] text-white font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-[#B8944F] hover:shadow-lg hover:shadow-[#C9A86C]/25 hover:-translate-y-0.5 overflow-hidden"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="relative z-[1]">Dejar una reseña en Google</span>
              <svg
                className="relative z-[1] w-5 h-5 transition-transform duration-500 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
