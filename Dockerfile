# syntax=docker/dockerfile:1

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules/ build/ && npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start"]

EXPOSE 3000 5173