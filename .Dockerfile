FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install ci

CMD ["node","./server.js"]

