# Scale Labs — Portafolio

Portafolio de proyectos de **Scale Labs**. One-page, Next.js 15 (App Router) +
TypeScript + Tailwind CSS v4, animado con GSAP/ScrollTrigger y scroll suave con
Lenis. Se despliega en Vercel.

Comparte arquitectura y sistema visual con el landing de Scale Labs
(`Desktop/Landing-Scale`): mismos tokens de marca (`src/app/globals.css`), misma
tipografía (Inter), mismas primitivas de animación (`src/components/ui/`).
**No repite las secciones del landing** (equipo, servicios, métricas, FAQ) — este
sitio es solo el trabajo construido.

## Estructura

```
src/
  app/            layout, page, globals.css (tokens de marca)
  components/
    layout/       Navbar (sin enlaces de sección), Footer
    sections/     Hero · Work · Approach · Contact
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

## Desarrollo local

Requiere **Node 18+** y **pnpm**.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de producción
```

## Contenido

- **Proyectos:** `src/i18n/dictionary.ts` → `work.projects` (ES y EN). Cada uno con
  portada, galería, features, stack y `rightsReserved`.
- **Contacto:** `src/data/site.ts` — email `scalelabs.info@gmail.com`,
  WhatsApp `573023694545`. El formulario de la sección Contacto arma el mensaje y
  abre `wa.me` con el resumen.

## Despliegue (Vercel)

Autodetección de Next.js — sin `vercel.json`. En **Project → Settings → Build and
Deployment** el Framework Preset debe ser **Next.js** y los comandos en automático
(el proyecto venía de una app Vite; si quedaron overrides de `vite build` /
output `dist`, quitarlos).

## Pendiente antes de publicar

- `src/data/site.ts` → `url` (dominio real, alimenta `metadataBase` / Open Graph)
  y `social` (cuentas reales; el Footer no muestra el ícono sin href).
