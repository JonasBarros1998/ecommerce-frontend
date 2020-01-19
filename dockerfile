FROM node:latest
COPY .  /home/jonas/Code/
COPY package.json /home/jonas/Code/
WORKDIR /home/jonas/Code/
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000