"use client";

import { useState } from "react";
import { PaperPlaneRight, CheckCircle } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const services = [
  "Diseño de Sonrisa",
  "Carillas Dentales",
  "Implantes Dentales",
  "Blanqueamiento",
  "Limpieza Profunda",
  "Consulta General",
  "Otro",
];

export default function CTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const ref = useReveal<HTMLDivElement>({ margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl border border-accent/10 bg-gradient-to-br from-accent/5 via-surface-light-2 to-surface-light-2 p-8 shadow-xl shadow-accent/5 md:p-16 dark:from-accent/3 dark:via-surface-dark dark:to-surface-dark"
        >
          <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-accent/3 blur-3xl" />

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center transition-all">
              <CheckCircle size={48} weight="light" className="text-accent" />
              <h3 className="mt-6 font-display text-2xl font-bold text-text-light dark:text-text-dark">
                ¡Mensaje enviado!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-text-light/60 dark:text-text-dark/60">
                Gracias por escribirnos. La Dra. Valentina revisará tu solicitud y te
                contactaremos en las próximas 24 horas hábiles.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", service: "", message: "" });
                }}
                className="mt-8 rounded-full border border-accent/20 px-6 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div className="transition-all">
              <div className="mb-10 text-center">
                <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
                  Contacto
                </span>
                <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl">
                  Comienza tu{" "}
                  <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
                    transformación
                  </span>
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-text-light/60 dark:text-text-dark/60">
                  Cuéntanos qué tratamiento te interesa y te daremos toda la información
                  personalizada.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light placeholder:text-text-light/30 transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark dark:placeholder:text-text-dark/30"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light placeholder:text-text-light/30 transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark dark:placeholder:text-text-dark/30"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Teléfono (WhatsApp)"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light placeholder:text-text-light/30 transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark dark:placeholder:text-text-dark/30"
                  />
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark"
                  >
                    <option value="" disabled>
                      Tipo de servicio
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  placeholder="Cuéntanos sobre tu caso o lo que te gustaría mejorar..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light placeholder:text-text-light/30 transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark dark:placeholder:text-text-dark/30"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dim"
                  >
                    Enviar mensaje
                    <PaperPlaneRight
                      size={16}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
