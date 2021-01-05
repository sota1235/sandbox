FROM node:12.18.4-alpine

EXPOSE 11235
WORKDIR /app

RUN apk add git
COPY package.json package-lock.json ./
RUN npm install
COPY . .

CMD [ "node", "server.js"]
