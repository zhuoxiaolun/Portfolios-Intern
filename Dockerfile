FROM node as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . /app
RUN npm run build

FROM nginx
COPY ./nginx/nginx.conf /ect/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
