# Stage 1: Build the Angular app
FROM node:16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/d3n15tecfront /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]