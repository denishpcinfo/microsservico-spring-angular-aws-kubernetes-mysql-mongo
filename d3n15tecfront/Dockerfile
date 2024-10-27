FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/d3n15tecfront /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
