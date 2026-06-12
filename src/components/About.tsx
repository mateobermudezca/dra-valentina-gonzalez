"use client";

import Image from "next/image";
import { GraduationCap, Certificate, Users } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const stats = [
  { number: "500+", label: "Sonrisas Transformadas", icon: Users },
  { number: "CES", label: "Universidad de Egreso", icon: GraduationCap },
  { number: "10+", label: "Años de Experiencia", icon: Certificate },
];

export default function About() {
  const imgRef = useReveal<HTMLDivElement>({ variant: "left", margin: "-100px" });
  const textRef = useReveal<HTMLDivElement>({ variant: "right", margin: "-100px" });

  return (
    <section id="sobre-mi" className="relative py-28 md:py-36 bg-surface-light dark:bg-surface-dark/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left Side: Image with Double Bezel */}
        <div
          ref={imgRef}
          className="relative aspect-[4/5] p-1.5 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-0.375rem)] bg-gradient-to-b from-surface-light-2 to-surface-light/40 dark:from-surface-dark dark:to-surface-mid/40">
            <Image
              src="/images/dra-logo.png"
              alt="Dra. Valentina González Cruz - Especialista en Diseño de Sonrisa en Medellín"
              fill
              className="object-contain object-bottom drop-shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div ref={textRef} className="flex flex-col gap-8">
          <div>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
              La Doctora
            </span>
          </div>

          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl text-text-light dark:text-text-dark font-light">
            Detrás de cada sonrisa hay <br />
            <span className="font-bold text-accent">dedicación y arte.</span>
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-text-light/65 dark:text-text-dark/65">
            <p>
              Soy la <strong>Dra. Valentina González Cruz</strong>, odontóloga egresada de la prestigiosa <strong>Universidad CES de Medellín</strong>. Me especializo en odontología estética, diseño de sonrisa digital y carillas dentales de alta precisión.
            </p>
            <p>
              Entiendo la estética dental como una disciplina artística que exige rigor científico. No creo en las sonrisas genéricas de molde; cada diseño que realizamos se estudia a partir de la anatomía facial, la armonía labial y la expresión natural del paciente para lograr un resultado único e indetectable.
            </p>
            <p>
              Nuestra clínica boutique en El Poblado está diseñada para ofrecerte una experiencia relajante y exclusiva. Damos la bienvenida a pacientes de todo el mundo y les brindamos un acompañamiento integral para que su transformación sea fluida y placentera.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2 rounded-2xl bg-accent/5 p-4 text-center border border-accent/5">
                <stat.icon size={18} className="mx-auto text-accent" weight="light" />
                <div className="font-display text-lg md:text-xl font-bold text-text-light dark:text-text-dark">
                  {stat.number}
                </div>
                <div className="text-[10px] leading-tight text-text-light/50 dark:text-text-dark/50 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
