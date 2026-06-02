# JGA TECH — Landing corporativa

Landing page premium para **JGA TECH** (desarrollo de software y consultoría tecnológica). Construida con React + Vite, Material UI, Framer Motion y React Router. Diseño minimalista en blanco y negro, mobile-first, accesible (AA) y con SEO básico.

## Stack

- **React 18** + **Vite 5**
- **Material UI 5** (`@mui/material`, `@mui/icons-material`)
- **Framer Motion** (animaciones discretas: fade up/left/right, scale, stagger)
- **React Router 6** (rutas + lazy loading)

## Requisitos

- **Node.js 18 o superior** (Vite 5 no soporta Node 16).

## Instalación y ejecución

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # sirve el build localmente
```

### Variables de entorno

Copia `.env.example` a `.env` y completa los datos de contacto:

```
VITE_EMAIL_EMPRESA=contacto@jgatech.dev
VITE_WHATSAPP_EMPRESA=573000000000
VITE_CIUDAD_EMPRESA=Barranquilla, Colombia
```

Si no defines `.env`, se usan valores por defecto seguros (ver `src/config/company.js`).

## Ejecución con Docker (recomendado en este equipo)

Como en esta máquina `npm`/Node están limitados, Docker es la vía más simple: el
contenedor trae su propio Node 20.

```bash
# Desarrollo con hot-reload  ->  http://localhost:5173
docker compose up dev

# Producción (build + nginx) ->  http://localhost:8080
docker compose up prod --build

# Detener
docker compose down
```

- `Dockerfile` es multi-stage: `dev` (Vite), `build` (genera `/dist`) y `prod`
  (nginx sirviendo los estáticos, con fallback SPA configurado en `nginx.conf`).
- El servicio `dev` monta el código como volumen, por lo que los cambios se
  reflejan al instante (polling activado para Windows/macOS).
- Para inyectar datos de contacto en producción, define `VITE_*` en un `.env`
  antes de construir (`docker compose build prod`).

## Estructura

```
src/
  pages/        Home, Nosotros, Servicios, Portafolio, Contacto, NotFound
  components/
    layout/     Navbar, Footer, ScrollToTop
    sections/   Hero, About, MissionVisionValues, Differential, Founders,
                Services, Portfolio, CTA, Contact
    common/     AnimatedContainer, AnimatedItem, SectionTitle, PageWrapper, Logo
  data/         founders.js, services.js, portfolio.js
  config/       company.js, navigation.js
  hooks/        useSmartNav.js, useDocumentMeta.js
  routes/       AppRoutes.jsx (lazy loading)
  theme.js      Tema MUI (paleta + tipografías Playfair Display / Inter)
```

## Navegación

Funciona de dos formas, gestionadas por `useSmartNav`:

- **Por rutas:** `/`, `/nosotros`, `/servicios`, `/portafolio`, `/contacto`.
- **Por scroll:** desde la Home, los enlaces hacen *smooth scroll* a la sección
  correspondiente. `ScrollToTop` sube al inicio al cambiar de ruta (o desplaza al
  ancla si la URL trae `#seccion`).

## Personalización rápida

- **Fundadores:** `src/data/founders.js` (reemplaza las imágenes placeholder por
  fotos reales en `/public`).
- **Servicios:** `src/data/services.js`.
- **Proyectos:** `src/data/portfolio.js` (estructura lista para añadir más).
- **Colores / tipografía:** `src/theme.js`.

## Despliegue

Incluye `vercel.json` (Vercel) y `public/_redirects` (Netlify) para que el
enrutado SPA funcione en recargas de rutas profundas. Publica la carpeta `dist/`.

---

> ⚠️ **Nota sobre el entorno de desarrollo actual:** en esta máquina `npm` está
> configurado con un *prefix* global que apunta a `C:\Users\admin_intune` (perfil
> Intune sin permisos) y Node es la v16. Para trabajar este proyecto:
>
> 1. Instala/activa **Node 18+** (por ejemplo con `nvm use 18`).
> 2. Si `npm` sigue fallando con `EPERM ... admin_intune`, ejecuta
>    `npm config set prefix "$env:APPDATA\npm"` para mover el prefix global a una
>    ruta con permisos, y reinicia la terminal.

🤖 Generado con [Claude Code](https://claude.com/claude-code)
