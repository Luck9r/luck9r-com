FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build

CMD ["serve", "-s dist"]