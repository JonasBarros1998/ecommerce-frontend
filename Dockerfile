FROM node:latest
COPY . /development
WORKDIR /development
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start
