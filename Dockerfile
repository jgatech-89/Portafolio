# syntax=docker/dockerfile:1

# ---- Base image with pnpm enabled ----
FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@10 --activate
WORKDIR /app

# ---- Install dependencies (cached while package.json/lockfile don't change) ----
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --no-frozen-lockfile

# ---- Build the application ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ---- Production runtime image ----
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# `output: "standalone"` (next.config.ts) traces only the files the server
# actually needs, so the runtime image doesn't carry the full node_modules.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# 3003 keeps this clear of the Scale Labs landing (3002) and the old
# Vite portfolio (5173 / nginx 8080).
ENV PORT=3003
EXPOSE 3003

CMD ["node", "server.js"]
