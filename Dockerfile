# syntax=docker/dockerfile:1

# Building App
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules/ build/ && npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "dev"]

EXPOSE 3000 5173 8000