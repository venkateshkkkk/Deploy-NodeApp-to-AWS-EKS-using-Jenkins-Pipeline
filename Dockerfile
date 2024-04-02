FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install express
COPY . .
EXPOSE 3005
CMD [ "node", "server.js" ]
