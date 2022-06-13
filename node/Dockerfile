FROM node:15 as builder

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget && \ 
    npm install

FROM node:alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY --from=builder /usr/src/app .

COPY package*.json ./

RUN npm install

COPY . .

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz