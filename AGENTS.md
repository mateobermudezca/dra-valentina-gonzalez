# Project: Dr Valentina Gonzalez — Dental Boutique Landing Page

## Goal
- Desarrollar una landing page impactante y profesional para el consultorio dental de la Dra. Valentina González (diseño de sonrisa, micro-diseño e implantes dentales) para atraer leads.

## Constraints & Preferences
- **Tech stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Animaciones:** Hook custom `useReveal` con Intersection Observer + CSS keyframes (`motion/react` incompatible con Turbopack en Next.js 16)
- **Tema visual:** Dual (Light/Dark toggle con clase `.dark` persistida en localStorage). Colores en OKLCH.
- **Identidad de marca actualizada:** Beige/dorado cálido extraído del logo (`oklch(0.75 0.08 73)`) como color acento principal. Marrón cálido (`oklch(0.52 0.10 60)`) para botones y rellenos sólidos.
- **Tipografía:** Outfit (display) + Plus Jakarta Sans (body). Ambas desde Google Fonts.
- **Iconos:** Phosphor Icons variante `light` — componente que los importa debe tener `"use client"`.
- **Diente en Hero:** Escena 3D con R3F (`Hero3DScene.tsx`) — diente procedural Three.js con material físico, glow rings, partículas, y parallax por mouse.
- **Tema claro/oscuro:** Hero usa clases `dark:` en Tailwind. Fondo `bg-surface-light-2/20 dark:bg-surface-dark/10`. Textos, badges y botones cambian automáticamente con el toggle `.dark`.
- **Contenido visual:** Logo (`logo.png`), foto Dra. con logo superpuesto y fondo transparente (`dra-logo.png`), par antes/después para slider (`before-1.jpg`, `after-1.jpg`).
- **Deploy:** Repositorio creado en GitHub (`mateobermudezca/dra-valentina-gonzalez`). Usuario despliega en Vercel.
- **Skill instalado:** `3d-web-experience` desde `sickn33/antigravity-awesome-skills` — skill local en `.agents/skills/3d-web-experience/SKILL.md`.

## Progress
### Done
- Proyecto Next.js 16 inicializado (TypeScript, Tailwind v4, App Router). Dependencias instaladas.
- Design system definido en `globals.css` con `@theme inline`. Colores actualizados al beige del logo.
- Componentes creados: `Nav`, `Hero`, `Services`, `Gallery`, `About`, `Testimonials`, `CTAForm`, `Footer`, `WhatsAppButton`.
- Hook `useReveal` para animaciones scroll-reveal con Intersection Observer. CSS keyframes definidos.
- GitHub repo creado (`mateobermudezca/dra-valentina-gonzalez`) y push exitoso.
- Logo integrado en Nav (reemplazó texto por imagen).
- Hero rediseñado: recorte Dra. flota sobre gradiente suave sin fondo sólido.
- BeforeAfter slider componente creado (`src/components/BeforeAfter.tsx`) con pointer events nativos y `clip-path`.
- Colores del sistema actualizados: beige logo (`oklch 0.75 0.08 73`) como acento, marrón cálido (`oklch 0.52 0.10 60`) para botones. Pulse-glow actualizado.
- 6 imágenes de Instagram copiadas a `public/images/gallery-{1..6}.jpg`.
- BeforeAfter slider integrado en `Gallery.tsx` reemplazando slider manual anterior.
- Skill `3d-web-experience` instalado localmente en `.agents/skills/3d-web-experience/`.
- `@react-three/fiber`, `@react-three/drei`, `three` instalados. Se intentó escena 3D full-bleed oscura con diente procedural, partículas y anillos.
- Build verificado (`npm run build` pasa sin errores con Turbopack).

### In Progress
- *(none)*

### Blocked
- *(none)*

## Key Decisions
- **No usar `motion/react`:** Causa `TypeError: createContext is not a function` con Next.js 16 + Turbopack. Se reemplazó con Intersection Observer + CSS keyframes.
- **`"use client"` obligatorio para íconos Phosphor:** El build falla si un server component importa `@phosphor-icons/react`.
- **Color acento cambiado a beige del logo:** El logo extraído dio `oklch(0.75 0.08 73)`. Se usa para text/border/glow, y un marrón más oscuro (`oklch(0.52 0.10 60)`) para botones/rellenos sólidos para mantener contraste WCAG.
- **Hero sin fondo sólido en la foto:** El recorte transparente de la Dra. se presenta sobre gradiente suave + `drop-shadow-2xl`, sin borde ni ring.
- **BeforeAfter con pointer events nativos:** Sin dependencias externas. Usa `clip-path` para revelar la imagen "después" y `setPointerCapture` para arrastre fluido en desktop y móvil.
- **Slider integrado en Gallery en vez de página separada:** Se reemplazó el slider manual del featured case por el componente `BeforeAfter` reutilizable.
- **Diente procedural en vez de descargar modelo externo:** Todos los sitios con modelos dentales gratuitos (Sketchfab, Meshy.ai, Freecreat) requieren autenticación o cuenta para descargar. Se optó por crear un diente estilizado con primitivas Three.js (esfera + cilindros), material físico tipo porcelana (low roughness, clearcoat). Más liviano, sin licencias ni dependencias externas.
- **R3F funciona con Next.js 16 + Turbopack:** A diferencia de `motion/react`, `@react-three/fiber` compila y renderiza correctamente. Se importa con `dynamic(..., { ssr: false })` para evitar SSR del canvas WebGL.
- **Hero oscuro full-bleed:** Se optó por un fondo oscuro (`#0a0808`) para la escena 3D que contrasta con las secciones claras siguientes. El `alpha: false` en el Canvas y el color de fondo en Three.js (`color attach="background"`) permiten que los elementos 3D (partículas, anillos, diente) brillen con alto contraste. Un gradiente overlay a la izquierda asegura legibilidad del texto.
- **Mouse parallax vía ref mutado:** En vez del `onPointerMove` de R3F, se usa el `pointer` del hook `useThree` con `THREE.MathUtils.lerp` para movimiento suave y fluido de toda la escena.
## Next Steps
1. Hacer push de los cambios actuales a GitHub
2. Confirmar deploy automático en Vercel
3. *(Fase 2)* Conectar formulario con Google App Script + Sheets + Calendar

## Critical Context
- La imagen `dra-logo.png` tiene fondo transparente (Photoroom). El Hero la posiciona con `object-contain` + `drop-shadow-2xl` sobre gradiente — sin marco sólido.
- Las imágenes `before-1.jpg` y `after-1.jpg` están copiadas a `public/images/` y el componente `BeforeAfter` ya está dentro del `Gallery` como featured case.
- El color beige del logo (`oklch 0.75 0.08 73`) es muy claro para botones con texto blanco, por eso se usa `accent-dim` para rellenos sólidos.
- Next.js 16 usa Turbopack por defecto. Paquetes que dependen de `createContext` durante SSR fallan (`motion/react`). `@react-three/fiber` no tiene ese problema.
- Instagram de referencia: @dravalentinagonzalez
- Skill `3d-web-experience` instalado local, no aparece en system prompt de skills disponibles. Se accede directamente leyendo `.agents/skills/3d-web-experience/SKILL.md`.
- `Hero3DScene.tsx` usa `navigator.userAgent` para mobile detection y `document.createElement("canvas").getContext("webgl")` para WebGL check. Solo se monta en cliente (`useState(false)` + `setMounted(true)` en `useEffect`). Ahora con `alpha: false` y fondo oscuro `#0a0808` en la escena 3D.
- El Canvas ahora es `absolute inset-0` cubriendo todo el hero section, no solo la columna derecha. El texto y badges flotan sobre un gradiente overlay para legibilidad.
- Las partículas (200) usan `AdditiveBlending` con 4 colores de paleta. Los `GlowRing` son anillos planos rotados en 3D. El `TorusKnotWireframe` flota y rota independientemente.
- El diente se compone de: `SphereGeometry` escalada (corona) + `CylinderGeometry` (cuello) + `CylinderGeometry` cónico (raíz). Material `MeshPhysicalMaterial` con clearcoat 0.6 y roughness 0.08.

## Relevant Files
- `src/app/globals.css`: Design system con colores OKLCH actualizados al beige del logo
- `src/components/Hero.tsx`: Hero con escena 3D full-bleed de fondo oscuro, texto con gradiente dorado, badges flotantes con glassmorphism
- `src/components/Hero3DScene.tsx`: Escena 3D completa — fondo `#0a0808`, torus knot wireframe, 3 GlowRings concéntricos, 200 partículas additive blending, 3 FloatingDiamonds, diente procedural (esfera+cilindros, material físico clearcoat), mouse parallax suave (lerp), 4 luces
- `src/components/BeforeAfter.tsx`: Slider interactivo antes/después con drag (ya integrado en Gallery)
- `src/components/Gallery.tsx`: Ahora usa `BeforeAfter` para el featured case en lugar del slider manual
- `src/components/Nav.tsx`: Nav con logo imagen en lugar de texto
- `src/components/CTAForm.tsx`: Botones cambiados a `bg-accent-dim`
- `src/components/WhatsAppButton.tsx`: Botón flotante con `bg-accent-dim`
- `public/images/logo.png`: Logo de la clínica (beige/dorado)
- `public/images/dra-logo.png`: Foto Dra. con logo superpuesto, fondo transparente
- `public/images/before-1.jpg` / `public/images/after-1.jpg`: Par antes/después para slider
- `public/images/gallery-{1..6}.jpg`: Galería original
- `src/components/About.tsx`: "Sobre Mi" rediseñado — blob image, glassmorphism stats, SVG decorative line, staggered reveals, useScrollReveal + useCountUp
- `src/components/Testimonials.tsx`: Carrusel horizontal con 8 testimonios, auto-rotación 6s, swipe, paginación, tarjetas glassmorphism con estrellas doradas
- `src/hooks/useScrollReveal.ts`: Hook scroll-reveal genérico con IntersectionObserver (usado por About y Testimonials)
- `src/hooks/useCountUp.ts`: Hook contador animado con requestAnimationFrame (usado por About)
- `.agents/skills/3d-web-experience/SKILL.md`: Skill de 3D web (Three.js, R3F, Spline) — leído para guiar implementación
- `src/lib/useReveal.ts`: Hook scroll-reveal legacy (usado por Hero, Services, Gallery, CTAForm)
