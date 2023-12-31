FROM node:20.8.1-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN export NODE_OPTIONS=--max_old_space_size=4096
RUN npm run build



FROM nginx:alpine


COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
