FROM node:16 AS builder

WORKDIR /build

ADD package.json .
ADD package-lock.json .

RUN npm ci

ADD src ./src
ADD static ./static
ADD svelte.config.js .
ADD vite.config.ts .

RUN npm run build

FROM nginx AS runner

WORKDIR /usr/share/nginx/html
COPY --from=builder /build/build .