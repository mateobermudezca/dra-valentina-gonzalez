"use client";

import { useState } from "react";
import { PaperPlaneRight, CheckCircle, WhatsappLogo } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const services = [
  "Diseño de Sonrisa",
  "Carillas de Porcelana/Resina",
  "Implantes Dentales & Rehabilitación",
  "Blanqueamiento Premium",
  "Limpieza / Valoración",
  "Otro",
];

export default function CTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    isInternational: "",
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
            <div className="flex flex-col items-center justify-center py-16 text-center transition-all z-10 relative">
              <CheckCircle size={48} weight="light" className="text-accent" />
              <h3 className="mt-6 font-display text-2xl font-bold text-text-light dark:text-text-dark">
                ¡Solicitud Recibida!
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-text-light/65 dark:text-text-dark/65">
                Gracias, <strong>{form.name}</strong>. La Dra. Valentina revisará tu solicitud de valoración para <strong>{form.service}</strong> y te contactaremos en menos de 24 horas hábiles.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center">
                <a
                  href={`https://wa.me/573126668428?text=Hola%20Dra.%20Valentina%2C%20acabo%20de%20enviar%20el%20formulario%20de%20contacto.%20Mi%20nombre%20es%20${encodeURIComponent(form.name)}%20y%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(form.service)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dim shadow-lg shadow-accent/15"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Priorizar cita por WhatsApp
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", service: "", isInternational: "", message: "" });
                  }}
                  className="rounded-full border border-accent/20 px-6 py-3 text-sm font-semibold text-text-light/70 transition-colors hover:bg-accent/10 dark:text-text-dark/70"
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          ) : (
            <div className="transition-all z-10 relative">
              <div className="mb-10 text-center">
                <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
                  Agendamiento
                </span>
                <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl text-text-light dark:text-text-dark font-light">
                  Comienza tu <br />
                  <span className="font-bold text-accent">transformación.</span>
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-text-light/60 dark:text-text-dark/60">
                  Cuéntanos qué tratamiento te interesa y diseñemos juntos la sonrisa que mereces.
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
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light placeholder:text-text-light/35 transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark dark:placeholder:text-text-dark/35"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light placeholder:text-text-light/35 transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark dark:placeholder:text-text-dark/35"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="WhatsApp (ej: +57 300 1234567)"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light placeholder:text-text-light/35 transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark dark:placeholder:text-text-dark/35"
                  />
                  <select
                    required
                    value={form.isInternational}
                    onChange={(e) => setForm({ ...form, isInternational: e.target.value })}
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark"
                  >
                    <option value="" disabled>
                      ¿Dónde te encuentras?
                    </option>
                    <option value="local">Resido en Colombia (Local)</option>
                    <option value="international">Viajo desde el exterior (Internacional)</option>
                  </select>
                </div>

                <div>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark"
                  >
                    <option value="" disabled>
                      Tratamiento de Interés
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  placeholder="Cuéntanos brevemente sobre tu caso o qué aspecto de tu sonrisa te gustaría mejorar..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-accent/10 bg-white/50 px-5 py-3.5 text-sm text-text-light placeholder:text-text-light/35 transition-all focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/10 dark:bg-white/5 dark:text-text-dark dark:placeholder:text-text-dark/35"
                />

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dim shadow-lg shadow-accent/10"
                  >
                    Enviar Solicitud
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
