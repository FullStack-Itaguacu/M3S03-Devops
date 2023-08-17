FROM node:18 as construir

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

FROM nginx:alpine AS prod

COPY --from=construir /app/dist /usr/share/nginx/html

EXPOSE 80
