# syntax=docker/dockerfile:1

# Building App
FROM node:20-alpine

WORKDIR /app

COPY . .

RUN rm -rf node_modules/ build/ && npm ci && npm run build

EXPOSE 5173
EXPOSE 8000
EXPOSE 3000

CMD [ "npm", "run", "--mode", "production"]