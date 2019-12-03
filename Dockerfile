FROM node:latest
COPY . /development
WORKDIR /development/ecommerce-frontend/src/app
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start
