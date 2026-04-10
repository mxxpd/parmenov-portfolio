ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS base

WORKDIR /app

COPY package.json package-lock.json ./

FROM base AS dev

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV NUXT_HOST=0.0.0.0
ENV NITRO_HOST=0.0.0.0
ENV PORT=3000
ENV NUXT_PORT=3000
ENV NITRO_PORT=3000

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev:local", "--", "--host", "0.0.0.0", "--port", "3000"]

FROM base AS build

RUN npm ci

COPY . .

RUN npm run build

FROM node:${NODE_VERSION} AS production

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV NUXT_HOST=0.0.0.0
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV PORT=3000

COPY --from=build /app/.output ./.output

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:3000/ || exit 1

CMD ["node", ".output/server/index.mjs"]
