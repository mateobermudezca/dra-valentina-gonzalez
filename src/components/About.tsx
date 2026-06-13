"use client";

import Image from "next/image";
import { Smiley, GraduationCap, Certificate } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

type StatDef = {
  end: number | string;
  suffix: string;
  label: string;
  icon: typeof Smiley;
  ariaLabel: string;
};

const stats: StatDef[] = [
  { end: 500, suffix: "+", label: "SONRISAS TRANSFORMADAS", icon: Smiley, ariaLabel: "Más de 500 sonrisas transformadas" },
  { end: "CES", suffix: "", label: "UNIVERSIDAD DE EGRESO", icon: GraduationCap, ariaLabel: "Universidad CES de egreso" },
  { end: 10, suffix: "+", label: "AÑOS DE EXPERIENCIA", icon: Certificate, ariaLabel: "Más de 10 años de experiencia" },
];

function StatCard({ stat, shouldStart }: { stat: StatDef; shouldStart: boolean }) {
  const animatedValue = useCountUp(stat.end, 2000, shouldStart);
  const Icon = stat.icon;

  return (
    <div className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border border-[#C9A86C]/10 rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 hover:bg-white/80 hover:shadow-lg hover:shadow-[#C9A86C]/5 hover:-translate-y-1 hover:border-[#C9A86C]/25">
      <Icon
        size={28}
        className="mx-auto text-[#C9A86C] mb-3 transition-transform duration-500 group-hover:scale-110"
        weight="duotone"
      />
      <div
        className="font-display text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-1"
        aria-label={stat.ariaLabel}
      >
        {animatedValue}{stat.suffix}
      </div>
      <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] font-medium leading-tight">
        {stat.label}
      </div>
      <div className="absolute -bottom-10 -right-10 w-[100px] h-[100px] bg-[#C9A86C]/5 rounded-full transition-transform duration-500 scale-0 group-hover:scale-100" />
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>(0.05);
  const { ref: imgWrapperRef, isVisible: imgVisible } = useScrollReveal<HTMLDivElement>(0.2);
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: headingGroupRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: lineRef, isVisible: lineVisible } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: svgRef, isVisible: svgVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center py-24 lg:py-0 selection:bg-[#C9A86C]/20 selection:text-[#1A1A1A]"
    >
      {/* Decorative SVG line */}
      <div
        ref={svgRef}
        className="hidden lg:block absolute z-[5] pointer-events-none"
        style={{ left: "38%", top: "10%", height: "80%", width: "100px" }}
        aria-hidden="true"
      >
        <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M 50 0 C 50 80, 20 160, 50 240 C 80 320, 30 400, 50 480 C 70 560, 30 640, 50 720 C 60 760, 50 780, 50 800"
            stroke="#C9A86C"
            strokeOpacity={0.2}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="900"
            strokeDashoffset={svgVisible ? 0 : 900}
            style={{ transition: "stroke-dashoffset 2.5s ease-in-out" }}
          />
          <circle
            cx="50" cy="100" r="3" fill="#C9A86C"
            style={{ opacity: svgVisible ? 0.3 : 0, transition: "opacity 0.6s ease-in-out 0.4s" }}
          />
          <circle
            cx="50" cy="300" r="3" fill="#C9A86C"
            style={{ opacity: svgVisible ? 0.3 : 0, transition: "opacity 0.6s ease-in-out 0.8s" }}
          />
          <circle
            cx="50" cy="580" r="3" fill="#C9A86C"
            style={{ opacity: svgVisible ? 0.3 : 0, transition: "opacity 0.6s ease-in-out 1.2s" }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-screen">

          {/* LEFT COLUMN - Image */}
          <div className="lg:col-span-5">
            <div
              ref={imgWrapperRef}
              className={`relative transition-all duration-1000 ease-out ${
                imgVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative mx-auto max-w-[320px] sm:max-w-[400px] lg:max-w-[480px]">
                {/* Circle background */}
                <div className="w-full aspect-square rounded-full shadow-2xl" style={{ backgroundColor: "#dbd3bf" }} />

                {/* Image overflowing top of circle */}
                <div className="absolute left-[-8%] right-[-8%] -top-[18%] bottom-0">
                  <Image
                    src="/images/dra-logo.png"
                    alt="Dra. Valentina González Cruz, odontóloga estética"
                    fill
                    className="object-cover object-top transition-transform duration-700 hover:scale-105 cursor-pointer"
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
                    quality={90}
                    loading="lazy"
                  />
                </div>

                {/* Gold ring accent */}
                <div className="absolute inset-0 rounded-full ring-2 ring-[#C9A86C]/20 pointer-events-none" />

                {/* Floating decorative ring */}
                <div className="hidden sm:block absolute -top-6 -right-6 w-20 h-20 border-2 border-[#C9A86C]/30 rounded-full animate-spin-slow pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] border border-dashed border-[#C9A86C]/20 rounded-full" />
                </div>

                {/* Floating badge */}
                <div
                  ref={badgeRef}
                  className={`hidden sm:flex absolute -bottom-4 -left-4 items-center gap-3 backdrop-blur-md bg-white/70 rounded-2xl px-5 py-3 shadow-lg border border-white/50 transition-all duration-700 ease-out ${
                    badgeVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <Smiley size={22} className="text-[#C9A86C]" weight="duotone" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C9A86C]">
                    Artista Dental
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* RIGHT COLUMN - Content */}
          <div className="lg:col-span-6">
            {/* Badge "LA DOCTORA" */}
            <div
              ref={headingGroupRef}
              className={`flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div
                className="h-[2px] bg-[#C9A86C] transition-all duration-700 ease-out"
                style={{ width: headingVisible ? "40px" : "0px" }}
              />
              <span
                className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A86C]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                La Doctora
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className={`mt-6 font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-[#1A1A1A] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              Detrás de cada sonrisa hay{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #C9A86C 0%, #D4AF7A 50%, #B8944F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                dedicación y arte.
              </span>
            </h2>

            {/* Separator line */}
            <div
              ref={lineRef}
              className="mt-8 mb-8 h-[3px] rounded-full transition-all duration-1000 ease-out"
              style={{
                width: lineVisible ? "60px" : "0px",
                background: "linear-gradient(to right, #C9A86C, transparent)",
              }}
            />

            {/* Paragraphs */}
            <div
              ref={textRef}
              className={`flex flex-col gap-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <p className="text-base lg:text-[17px] leading-relaxed text-[#4A4A4A]" style={{ lineHeight: "1.8" }}>
                Soy la <strong className="text-[#1A1A1A] font-semibold">Dra. Valentina González Cruz</strong>, odontóloga egresada de la prestigiosa <strong className="text-[#1A1A1A] font-semibold">Universidad CES de Medellín</strong>. Me especializo en odontología estética, diseño de sonrisa digital y carillas dentales de alta precisión.
              </p>
              <p className="text-base lg:text-[17px] leading-relaxed text-[#4A4A4A]" style={{ lineHeight: "1.8" }}>
                Entiendo la estética dental como una disciplina artística que exige rigor científico. No creo en las sonrisas genéricas de molde; cada diseño que realizamos se estudia a partir de la anatomía facial, la armonía labial y la expresión natural del paciente para lograr un resultado único e indetectable.
              </p>
              <p className="text-base lg:text-[17px] leading-relaxed text-[#4A4A4A]" style={{ lineHeight: "1.8" }}>
                Nuestra clínica boutique en El Poblado está diseñada para ofrecerte una experiencia relajante y exclusiva. Damos la bienvenida a pacientes de todo el mundo y les brindamos un acompañamiento integral para que su transformación sea fluida y placentera.
              </p>
            </div>

            {/* Stats cards */}
            <div
              ref={statsRef}
              className={`mt-12 grid grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} shouldStart={statsVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden" aria-hidden="true">
        {Array.from({ length: 35 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 3}px`,
              height: `${Math.random() * 4 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? "#C9A86C" : i % 3 === 1 ? "#D4AF7A" : "#B8944F",
              opacity: Math.random() * 0.3 + 0.25,
              animation: `drift ${Math.random() * 4 + 4}s ease-in-out ${Math.random() * 5}s infinite`,
              willChange: "transform",
            }}
          />
        ))}
      </div>
    </section>
  );
}
