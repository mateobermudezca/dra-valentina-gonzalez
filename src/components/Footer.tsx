"use client";

import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="relative border-t border-accent/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <span className="font-display text-lg font-bold tracking-tight text-text-light">
              Dra. Valentina González
            </span>
            <p className="mt-1 text-xs text-text-light/50 leading-relaxed">
              Odontología Estética & Diseño de Sonrisa <br />
              Calle 19a #44-25, El Poblado, Medellín · Consultorio 1701-1702
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/dravalentinagonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/10 text-text-light/50 transition-colors hover:border-accent/30 hover:text-accent"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} weight="light" />
            </a>
            <a
              href="https://wa.me/573126668428?text=Hola%20Dra.%20Valentina%20Gonz%C3%A1lez%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/10 text-text-light/50 transition-colors hover:border-accent/30 hover:text-accent"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={18} weight="light" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-accent/5 pt-6 text-center text-[11px] text-text-light/40">
          &copy; {new Date().getFullYear()} Dra. Valentina González. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
