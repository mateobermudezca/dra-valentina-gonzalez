# PLAN DE DESARROLLO — Landing Page Dra. Valentina González

> Consultorio dental especializado en Diseño de Sonrisa, Micro-diseño (Carillas) e Implantes Dentales.
> Estética: Lujo Cálido y Sofisticado — Lujo boutique, no clínica fría.

---

## 1. DESIGN READ

**Lectura:** Landing page premium para un consultorio dental de alta gama, para pacientes que buscan transformación estética facial a través de procedimientos dentales. Lenguaje visual de lujo cálido y sofisticado. Audiencia: adultos 25–55, poder adquisitivo medio-alto, que valoran la estética y la calidad sobre el precio.

---

## 2. THREE DIALS

| DIAL | VALUE | RAZÓN |
|------|-------|-------|
| `DESIGN_VARIANCE` | 8 | Premium consumer, asimetría controlada, composiciones editoriales |
| `MOTION_INTENSITY` | 7 | Scroll reveals cinematográficos, micro-interacciones hápticas |
| `VISUAL_DENSITY` | 3 | Galería de arte — mucho espacio para respirar |

---

## 3. SISTEMA DE DISEÑO

### 3.1 Estrategia de Color

**Dirección:** "Lujo Cálido" — Oscuro profundo con matices cálidos + marfil cremoso + acento cobre/rose gold.

**Reflejos evitados:**
- ❌ No "salud / dental = blanco + celeste" (primer reflejo de IA)
- ❌ No "premium = beige + brass + espresso" (segundo reflejo)

```
--color-surface-dark:   oklch(0.13 0.008 30)    // carbón cálido #1A1815
--color-surface-mid:    oklch(0.18 0.01 30)     // carbón elevado #2A2724
--color-surface-light:  oklch(0.975 0.005 85)   // marfil #F7F5F0
--color-surface-light-2: oklch(0.99 0.003 85)   // blanco roto #FCFAF5
--color-accent:         oklch(0.68 0.12 50)     // cobre cálido
--color-accent-dim:     oklch(0.58 0.09 50)     // cobre apagado (hover)
--color-accent-glow:    oklch(0.72 0.14 50 / 0.15)  // glow sutil
--color-text-dark:      oklch(0.92 0.005 85)    // marfil claro sobre fondo oscuro
--color-text-light:     oklch(0.15 0.008 30)    // carbón sobre fondo claro
--color-border-dark:    oklch(1 0 0 / 0.08)     // bordes sutiles dark
--color-border-light:   oklch(0 0 0 / 0.06)     // bordes sutiles light
```

**Mapa de uso:**

| Token | Light | Dark |
|-------|-------|------|
| Fondo página | `--color-surface-light` (#F7F5F0) | `--color-surface-dark` (#1A1815) |
| Superficie elevada | `--color-surface-light-2` (#FCFAF5) | `--color-surface-mid` (#2A2724) |
| Acento primario | `--color-accent` (cobre) | `--color-accent` (cobre) |
| Texto cuerpo | `--color-text-light` | `--color-text-dark` |
| Bordes | `--color-border-light` | `--color-border-dark` |
| Fondo hero | `--color-surface-dark` | `--color-surface-dark` |

### 3.2 Tipografía

| Rol | Fuente | Peso | Uso |
|-----|--------|------|-----|
| Display / Headings | **Cabinet Grotesk** (variable) | 300–800 | Headlines, hero, títulos de sección |
| Body | **Satoshi** (variable) | 300–700 | Párrafos, navegación, pies de foto |
| Mono | **JetBrains Mono** | 400 | Números de estadísticas, badges |

**Escala tipográfica:**

```
--text-caption:   0.75rem  (12px)
--text-small:     0.875rem (14px)  
--text-body:      1rem     (16px)
--text-lead:      1.125rem (18px)
--text-h4:        1.25rem  (20px)
--text-h3:        1.5rem   (24px)
--text-h2:        2.25rem  (36px)
--text-h1:        3.5rem   (56px) 
--text-hero:      4.5rem   (72px) — solo hero headline (max 5 palabras)
```

**Reglas:**
- Body line length: 65–75ch
- Jerarquía por peso + tamaño, nunca solo color
- Sin Inter, sin Roboto, sin Arial, sin Helvetica
- Pairing: Cabinet Grotesk (display) + Satoshi (body)

### 3.3 Iconografía

- **Phosphor Icons** (`@phosphor-icons/react`) — variante `weight="light"`
- **Prohibido:** Lucide, FontAwesome, Material Icons
- Stroke-width global: 1.5
- Una familia por proyecto

### 3.4 Radios y Formas

| Elemento | Radio |
|----------|-------|
| Cards | `rounded-2xl` (16px) |
| Botones primarios | `rounded-full` (píldora) |
| Inputs | `rounded-xl` (12px) |
| Outer shell (Double Bezel) | `rounded-[2rem]` |
| Inner core (Double Bezel) | `rounded-[calc(2rem-0.375rem)]` |
| Badges / tags | `rounded-full` |

### 3.5 Elevación / Sombras

- 3 niveles:
  - **N1 (sutil):** Cards, `box-shadow: 0 1px 3px oklch(0 0 0 / 0.06), 0 1px 2px oklch(0 0 0 / 0.04)` tintado al fondo
  - **N2 (medio):** Nav flotante, `box-shadow: 0 4px 24px oklch(0 0 0 / 0.08)`
  - **N3 (alto):** Modales / overlays, `box-shadow: 0 24px 80px oklch(0 0 0 / 0.2)`
- Sin sombras negras puras — siempre tintadas al color de fondo

### 3.6 Modo Oscuro / Claro

- **Soporte dual desde el inicio**
- Respetar `prefers-color-scheme` por defecto
- Toggle manual visible (sun/moon icon en nav)
- Sin `#000000` ni `#FFFFFF` — usar off-black y off-white

---

## 4. ESTRUCTURA DE LA PÁGINA (9 secciones)

```
1. NAV — Fluid Island Glass Nav
2. HERO — Split screen asimétrico
3. LOGO WALL — "Confían en nosotros" (si aplican colaboraciones)
4. SERVICIOS DESTACADOS — 3 bento cards asimétricos
5. GALERÍA ANTES/DESPUÉS — Grid interactivo con hover reveal
6. SOBRE LA DOCTORA — Bio + foto + valores + cifras
7. TESTIMONIOS — Quotes de pacientes
8. CTA FINAL / AGENDAMIENTO — Formulario de citas
9. FOOTER — Datos de contacto, redes, legal
```

---

## 5. ESPECIFICACIÓN POR SECCIÓN

### 5.1 NAV — Fluid Island

**Comportamiento:**
- `position: fixed; top: 16px; left: 50%; transform: translateX(-50%)`
- Glass pill: `backdrop-blur-2xl bg-white/70 dark:bg-black/70`
- Border sutil: `ring-1 ring-black/5 dark:ring-white/10`
- `rounded-full`, padding horizontal generoso
- Al hacer scroll hacia abajo: se reduce ligeramente de tamaño, se intensifica el blur

**Items:**
- Inicio · Servicios · Galería · Dra. Valentina · Contacto
- CTA: "Agendar cita" (pill button con icono CalendarBlank)

**Mobile (< 768px):**
- Hamburger icon (3 líneas) que morph a X
- Menú overlay fullscreen: `backdrop-blur-3xl bg-black/80 dark:bg-white/80`
- Links staggered: `translate-y-12 opacity-0 → translate-y-0 opacity-100` con delay progresivo (100ms, 150ms, 200ms...)
- CTA "Agendar cita" como botón grande al final del menú

---

### 5.2 HERO — Split Screen

**Layout:** Foto a la izquierda `w-1/2`, texto a la derecha `w-1/2` (la elección natural porque la mirada entra por la imagen y luego lee el mensaje).

**Lado izquierdo (imagen):**
- Foto profesional de la Dra. Valentina con tratamiento Double Bezel
- Outer shell: `p-1.5 rounded-[2rem] bg-white/5 ring-1 ring-black/5 dark:ring-white/10`
- Inner core: la imagen con `rounded-[calc(2rem-0.375rem)] object-cover`
- Overlay sutil con gradiente radial

**Lado derecho (contenido):**
- Eyebrow opcional `text-[11px] uppercase tracking-[0.2em]` — solo si hay un eslogan corto
- Headline: max 8 palabras, `text-5xl md:text-7xl tracking-tighter leading-none`
- Subtext: max 20 palabras, `text-lg leading-relaxed`, describiendo transformación estética
- CTAs:
  - **Primary:** "Agendar Consulta" — pill button, fondo acento, texto blanco, icono calendario anidado
  - **Secondary:** "WhatsApp" — ghost button con borde y texto, icono WhatsApp

**Animación:**
- Imagen: slide-in desde la izquierda + scale suave (1.02→1)
- Texto: fade-up con blur resolve (opacity 0, translateY 24, blur 4px → opacity 1, translateY 0, blur 0)
- CTAs: fade-up con stagger (200ms después del headline)
- Duración: 700ms, cubic-bezier(0.16, 1, 0.3, 1)

**Reglas estrictas:**
- `min-h-[100dvh]` (NUNCA `h-screen`)
- `pt-24` máximo
- CTAs visibles sin necesidad de scroll
- Sin trust logos, sin feature bullets, sin pricing dentro del hero

---

### 5.3 LOGO WALL (opcional)

**Solo si existen colaboraciones/marcas.**
- Sección debajo del hero (NUNCA dentro)
- Logos reales SVG
- Sin etiquetas de categoría debajo de logos
- Modo claro y oscuro
- Layout: fila horizontal con gap generoso, centrado

---

### 5.4 SERVICIOS DESTACADOS — Bento Asimétrico

**Layout:** CSS Grid asimétrico `grid-cols-12` con 3 cards de distintos tamaños.

- **Card 1 (grande):** `col-span-7 row-span-2` — Diseño de Sonrisa (servicio estrella)
- **Card 2 (mediano):** `col-span-5 row-span-1` — Micro-diseño / Carillas
- **Card 3 (mediano):** `col-span-5 row-span-1` — Implantes Dentales

**Cada card:**
- Double Bezel architecture
- Icono Phosphor light (Smiley, MagicWand, Tooth) — 32px, color acento
- Título: `text-2xl font-bold tracking-tight`
- Descripción: `text-base text-secondary max-w-[45ch]`
- Imagen de resultado representativa (con overlay sutil)
- Hover: escala 1.02, shadow se intensifica

**Mobile:** Todo `col-span-12` con `gap-6`

---

### 5.5 GALERÍA ANTES/DESPUÉS — Grid Interactivo

**Layout:** Grid de 2 columnas (desktop) con 4–6 pares de imágenes.

**Interacción:**
- Estado por defecto: imagen "Antes"
- Hover / Click: crossfade morph a imagen "Después"
- Overlay con label "Antes → Después" en cada card

**Técnica:**
- Dos imágenes apiladas con `position: absolute`
- Transición `opacity 0.6s ease` entre ellas
- En mobile: tap reveal en lugar de hover

**Sin eyebrow** (sección 2 desde la última que tuvo eyebrow).

---

### 5.6 SOBRE LA DOCTORA

**Layout Split:** Texto `w-1/2` + Foto `w-1/2` (o viceversa para variar del hero).

**Foto:** Retrato profesional de la Dra. Valentina, Double Bezel.

**Copy — Tono aspiracional, profesional, cálido:**
- Headline: ej. "Transformando sonrisas, transformando vidas"
- Body: Filosofía de la doctora — su enfoque en la estética facial integral, su formación, su pasión por el diseño de sonrisa
- Cifras destacadas: "+10 años de experiencia · +500 sonrisas transformadas · +1000 procedimientos exitosos"
  - Cada cifra en formato grande (`text-4xl font-bold`), con label pequeña arriba

---

### 5.7 TESTIMONIOS

**3 quotes de pacientes.**

**Layout:** Columnas (desktop) o stack (mobile).

**Cada testimonio:**
- Quote body: máx 3 líneas, `text-lg italic` o con comillas tipográficas decorativas
- "— Nombre del paciente · Tratamiento recibido"
- Sin foto del paciente a menos que esté disponible

**Reglas:**
- Sin em-dashes dentro del quote
- Sin quotes de más de 3 líneas
- Sin "— Sarah" (nombre + rol + tratamiento siempre)

---

### 5.8 CTA / AGENDAMIENTO — Formulario

**Headline:** "Agenda tu consulta"
**Subtext:** "Déjanos tus datos y te contactaremos para agendar la mejor hora para ti."

**Campos del formulario:**

| Campo | Tipo | Validación |
|-------|------|------------|
| Nombre completo | `input text` | required, min 3 chars |
| Teléfono / WhatsApp | `input tel` | required, formato +56 |
| Correo electrónico | `input email` | required, email válido |
| Tipo de servicio | `select` | Diseño de Sonrisa · Micro-diseño / Carillas · Implantes Dentales · Otro |
| Fecha preferida | `input date` | opcional |
| Horario preferido | `select` | Mañana (9:00–12:00) · Tarde (14:00–18:00) |
| Mensaje | `textarea` | opcional, max 300 chars |

**Botón submit:** "Solicitar Cita" — pill button con icono PaperPlaneRight

**Después del submit:** Estado success con mensaje de agradecimiento + CTA a WhatsApp.

**WhatsApp flotante:** Botón fixed en esquina inferior derecha, con link directo `wa.me/...`

**Backend (planeado para después):**
- Google App Script endpoint → Google Sheets (base de datos) + Google Calendar (agenda)
- La doctora podrá filtrar leads por tipo de servicio para priorizar

---

### 5.9 FOOTER

**Layout:** Grid 4 columnas.
- Col 1: Nombre del consultorio + breve descripción
- Col 2: Enlaces rápidos (Inicio, Servicios, Galería, Contacto)
- Col 3: Contacto (dirección, teléfono, email)
- Col 4: Redes sociales (Instagram, WhatsApp)

**Copyright:** "© 2026 Dra. Valentina González. Todos los derechos reservados."
**Separador:** `border-t` sutil, texto centrado abajo.

---

## 6. ANIMACIONES Y MOTION

| Elemento | Animación | Implementación |
|----------|-----------|----------------|
| Hero text | fade-up + blur resolve, 700ms, stagger | `Motion` `whileInView` |
| Hero image | slide-in left + scale, 800ms | `Motion` `whileInView` |
| Nav scroll | compactación progresiva | `IntersectionObserver` + CSS transition |
| Cards servicio | fade-up + translateY 24px, stagger 80ms | `Motion` `whileInView` |
| Galería hover | crossfade morph Antes↔Después | CSS `opacity` + `transition` |
| Testimonios | fade-up in view | `Motion` `whileInView` |
| Form focus | border glow acento, label float | CSS `:focus-within` |
| Botones | magnetic hover: scale 0.98, icon drift | `Motion` `useMotionValue` |
| Mobile nav | staggered mask reveal | `Motion` `staggerChildren` |
| Números estadísticas | count-up on scroll | `Motion` `useMotionValue` |

**Cubic-bezier global:** `cubic-bezier(0.16, 1, 0.3, 1)` — ease-out exponencial.

**Reduced Motion:** `useReducedMotion()` — toda animación se degrada a estático.

**Prohibido:**
- `window.addEventListener('scroll', ...)` — usar `useScroll()` o IntersectionObserver
- Animar `top`, `left`, `width`, `height` — solo `transform` + `opacity`
- `requestAnimationFrame` tocando React state

---

## 7. RESPONSIVE

| Breakpoint | Ancho | Comportamiento |
|------------|-------|----------------|
| Mobile | < 768px | 1 columna `w-full px-4`. Hero stack vertical (imagen arriba, texto abajo). Nav hamburger. Grids → 1 col. Form full-width |
| Tablet | 768–1024px | 2 columnas parciales. Hero semi-stack. Nav items acortados |
| Desktop | > 1024px | Layouts asimétricos completos. Nav visible con todos los items |

**Reglas estrictas:**
- `min-h-[100dvh]` para secciones full viewport
- Nav max 80px height en desktop
- Hero headline max 2 líneas en desktop
- CTA text en UNA línea (3–4 palabras max)
- `backdrop-blur` solo en elementos fixed/sticky
- Layouts asimétricos colapsan a `grid-cols-1` en mobile

---

## 8. ANTI-PATTERNS (BANNED)

- ❌ **Gradient text** (`background-clip: text`)
- ❌ **Side-stripe borders** (>1px accent border en un lado)
- ❌ **Glassmorphism decorativo** (solo en nav fijo)
- ❌ **Hero-metric template** (big number + small label + stats)
- ❌ **Card grids idénticos** (mismo icono + heading + texto repetido)
- ❌ **Em dashes** en copy (`—` o `--`)
- ❌ **Inter** como tipografía
- ❌ **Lucide icons**
- ❌ **`#000000` o `#FFFFFF` puros**
- ❌ **Eyebrow** en más de 1 de cada 3 secciones
- ❌ **Zigzag repetitivo** (imagen+texto alternado > 2 veces seguidas)
- ❌ **Sombras negras puras** — siempre tintadas al fondo
- ❌ **Pure black shadows** (`rgba(0,0,0,0.x)`)
- ❌ **`h-screen`** — usar `min-h-[100dvh]`
- ❌ **Modales como primera opción** — preferir inline/progressive disclosure
- ❌ **Nested cards** (cards dentro de cards)

---

## 9. TECH STACK

```
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Motion (motion/react) — animaciones
- @phosphor-icons/react — iconografía
- next/font — Cabinet Grotesk + Satoshi (auto-hosted)
```

---

## 10. CONTENIDO VISUAL DISPONIBLE (desde `/images`)

- 6 imágenes descargadas de Instagram (@dravalentinagonzalez)
- Usar para: galería antes/después, cards de servicios
- Pendiente: foto profesional de la Dra. (para Hero y Sobre Mí)

---

## 11. BACKEND (PLANEADO, FASE 2)

**Sistema de agendamiento:**
- Google App Script como endpoint API
- Google Sheets como base de datos de leads
- Google Calendar para gestión de citas
- Filtro por tipo de servicio (para priorización de leads)
- Endpoint REST diseñado para integrarse en el formulario
