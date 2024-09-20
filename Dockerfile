FROM node:22

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm ci
ADD . .

CMD npm start