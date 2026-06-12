"use client";

import Image from "next/image";
import { GraduationCap, Certificate, User } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const stats = [
  { number: "500+", label: "Pacientes transformados", icon: User },
  { number: "8+", label: "Años de experiencia", icon: GraduationCap },
  { number: "3", label: "Certificaciones internacionales", icon: Certificate },
];

export default function About() {
  const imgRef = useReveal<HTMLDivElement>({ variant: "left", margin: "-100px" });
  const textRef = useReveal<HTMLDivElement>({ variant: "right", margin: "-100px" });

  return (
    <section id="sobre-mi" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div
          ref={imgRef}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/gallery-1.jpg"
            alt="Dra. Valentina González"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/40 via-transparent to-transparent" />
        </div>

        <div ref={textRef} className="flex flex-col gap-8">
          <div>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
              Sobre mí
            </span>
          </div>

          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
            Detrás de cada sonrisa hay{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
              dedicación y arte
            </span>
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-text-light/60 dark:text-text-dark/60">
            <p>
              Soy la Dra. Valentina González, odontóloga especializada en estética dental
              con formación internacional en diseño digital de sonrisa y rehabilitación oral.
            </p>
            <p>
              Creo que la odontología estética no es solo ciencia — es arte. Cada sonrisa
              que diseñamos comienza con un estudio profundo de la armonía facial, la
              personalidad y los sueños de nuestros pacientes.
            </p>
            <p>
              Mi compromiso es ofrecerte una experiencia de lujo, donde cada detalle está
              cuidado al milímetro, desde el diagnóstico digital hasta el resultado final.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2 rounded-2xl bg-accent/5 p-4 text-center">
                <stat.icon size={18} className="mx-auto text-accent" weight="light" />
                <div className="font-display text-xl font-bold text-text-light dark:text-text-dark">
                  {stat.number}
                </div>
                <div className="text-[10px] leading-tight text-text-light/50 dark:text-text-dark/50">
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
