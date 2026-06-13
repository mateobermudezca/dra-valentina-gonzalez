"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { List, X, Sun, Moon, WhatsappLogo } from "@phosphor-icons/react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto max-w-6xl rounded-2xl border px-6 transition-all duration-500 ${
          scrolled
            ? "h-14 border-accent/10 bg-surface-light-2/80 shadow-sm backdrop-blur-xl dark:border-accent/5 dark:bg-surface-dark/80"
            : "h-16 border-accent/5 bg-surface-light-2/60 backdrop-blur-md dark:bg-surface-dark/60"
        }`}
      >
        <div className="flex h-full items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-2.5"
          >
            <Image
              src="/images/logo.png"
              alt="Dra. Valentina González"
              width={100}
              height={36}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="hidden sm:inline text-sm font-semibold text-text-light dark:text-text-dark tracking-tight whitespace-nowrap">
              Dra. Valentina González
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-text-light/70 transition-colors hover:bg-accent/5 hover:text-accent dark:text-text-dark/70 dark:hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/573126668428?text=Hola%20Dra.%20Valentina%20Gonz%C3%A1lez%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20de%20valoraci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-text-light/60 transition-colors hover:bg-accent/10 hover:text-accent dark:text-text-dark/60"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={20} weight="light" />
            </a>

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-text-light/60 transition-colors hover:bg-accent/10 hover:text-accent dark:text-text-dark/60"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} weight="light" /> : <Moon size={18} weight="light" />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-text-light/60 transition-colors hover:bg-accent/10 hover:text-accent md:hidden dark:text-text-dark/60"
              aria-label="Menu"
            >
              {open ? <X size={20} weight="light" /> : <List size={20} weight="light" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-accent/10 bg-surface-light-2/95 shadow-lg backdrop-blur-xl transition-all duration-300 dark:bg-surface-dark/95 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-text-light/70 transition-colors hover:bg-accent/5 hover:text-accent dark:text-text-dark/70 dark:hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
