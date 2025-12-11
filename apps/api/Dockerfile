FROM node:22-alpine AS deps
WORKDIR /usr/src/api
COPY package*.json ./
RUN npm ci --silent

FROM node:22-alpine AS builder
WORKDIR /usr/src/api
COPY --from=deps /usr/src/api/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /usr/src/api
ENV NODE_ENV=production

COPY --from=builder /usr/src/api/dist ./dist
COPY --from=builder /usr/src/api/package*.json ./

RUN npm ci --omit=dev --ignore-scripts --silent

EXPOSE 8080
CMD ["node", "dist/index.js"]
