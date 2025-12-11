FROM node:22-alpine AS deps
WORKDIR /usr/src/web
COPY package*.json ./
RUN npm ci --silent

FROM node:22-alpine AS builder
WORKDIR /usr/src/web
COPY --from=deps /usr/src/web/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /usr/src/web
ENV NODE_ENV=production

COPY --from=builder /usr/src/web/public ./public
COPY --from=builder /usr/src/web/.next/standalone ./
COPY --from=builder /usr/src/web/.next/static ./.next/static

ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]