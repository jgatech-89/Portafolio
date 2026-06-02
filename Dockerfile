# ---------- Base ----------
# Node 20 LTS sobre Alpine (resuelve el problema de Node 16 del host).
FROM node:20-alpine AS base
WORKDIR /app

# ---------- Dependencias ----------
FROM base AS deps
# package-lock.json* es opcional (el glob evita fallar si aún no existe).
COPY package.json package-lock.json* ./
RUN npm install

# ---------- Desarrollo (Vite dev server con hot-reload) ----------
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

# ---------- Build de producción ----------
FROM deps AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

# ---------- Producción (estáticos servidos por nginx) ----------
FROM nginx:1.27-alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
