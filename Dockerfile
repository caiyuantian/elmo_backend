FROM node:10.16.1-alpine

MAINTAINER Robin Cai <caiyuantian@gmail.com>

RUN mkdir -p /home/elmo/backend

WORKDIR /home/elmo/backend

COPY . .

RUN npm install

RUN npm install grunt

RUN npm run grunt

EXPOSE 5000

CMD ["npm", "start"]