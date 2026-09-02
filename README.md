# Scale Labs — Portafolio

Portafolio de proyectos de **Scale Labs**. One-page, Next.js 15 (App Router) +
TypeScript + Tailwind CSS v4, animado con GSAP/ScrollTrigger y scroll suave con
Lenis. Dockerizado.

Comparte arquitectura y sistema visual con el landing de Scale Labs
(`Desktop/Landing-Scale`): mismos tokens de marca (`src/app/globals.css`),
misma tipografía (Inter), mismas primitivas de animación (`src/components/ui/`).
**No repite las secciones del landing** (equipo, servicios, métricas, FAQ) — este
sitio es solo el trabajo construido.

## Estructura

```
src/
  app/            layout, page, globals.css (tokens de marca)
  components/
    layout/       Navbar (sin enlaces de sección), Footer
    sections/     Hero · Work · Approach · CTA
    ui/           Reveal, SplitReveal, Magnetic, Parallax, StaircaseTag,
                  CustomCursor, PageLoader, Button, ContactOptions, SectionHeading
    providers/    SmoothScroll (Lenis + GSAP)
  data/           site.ts (contacto — NO se traduce)
  i18n/           dictionary.ts (ES/EN) + LocaleProvider
  lib/            gsap, hooks, utils, fonts, scrollColorFade
public/
  logo/           SVG de marca (isotipo + lockups) de scale-labs-identidad/
  projects/       Capturas de cada proyecto
```

## Contenido

- **Proyectos:** `src/i18n/dictionary.ts` → `work.projects` (ES y EN). Cada uno con
  portada, galería, features, stack y `rightsReserved`.
- **Contacto:** `src/data/site.ts` — email `scalelabs.info@gmail.com`,
  WhatsApp `573023694545`. `url` y `social` siguen en placeholder.

## Docker

```bash
# Producción (Next standalone) — http://localhost:3003
docker compose up -d --build scale-portfolio

# Desarrollo con hot-reload — http://localhost:3003
docker compose --profile dev up --build scale-portfolio-dev
```

Puerto 3003 (el landing usa 3002; la vieja landing en Vite usaba 5173 / 8080).

## Pendiente antes de publicar

- `src/data/site.ts` → `url` (dominio real, alimenta `metadataBase` / Open Graph)
  y `social` (cuentas reales; el Footer no muestra el ícono sin href).
- Deploy a Vercel cuando esté el dominio.
