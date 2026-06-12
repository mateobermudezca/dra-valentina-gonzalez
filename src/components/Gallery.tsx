"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { useReveal } from "@/lib/useReveal";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Resultado diseño de sonrisa" },
  { src: "/images/gallery-2.jpg", alt: "Carillas dentales" },
  { src: "/images/gallery-3.jpg", alt: "Implante dental" },
  { src: "/images/gallery-4.jpg", alt: "Transformación dental" },
  { src: "/images/gallery-5.jpg", alt: "Caso estético dental" },
  { src: "/images/gallery-6.jpg", alt: "Sonrisa final" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const headerRef = useReveal<HTMLDivElement>({ margin: "-100px" });

  return (
    <section id="galeria" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={headerRef} className="mb-16 text-center">
          <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            Resultados
          </span>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl">
            Sonrisas que hablan por sí solas
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-light/60 dark:text-text-dark/60">
            Cada caso es único. Estos son algunos de nuestros trabajos recientes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <GridItem key={img.src} img={img} index={i} onClick={() => setSelected(i)} />
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <X size={20} weight="bold" />
          </button>

          <div
            className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              width={1200}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function GridItem({
  img,
  index,
  onClick,
}: {
  img: (typeof images)[number];
  index: number;
  onClick: () => void;
}) {
  const ref = useReveal<HTMLButtonElement>({ delay: index * 80, margin: "-50px" });

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl ${
        index === 0 ? "md:col-span-2 md:row-span-2" : "aspect-square"
      }`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/10" />
    </button>
  );
}
