FROM node

MAINTAINER Robin Cai <caiyuantian@gmail.com>

WORKDIR /home/ubuntu/www/elmo/backend

EXPOSE 8000

CMD ["npm","run","grunt"]
CMD ["npm","start"]