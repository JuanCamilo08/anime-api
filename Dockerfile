FROM node:lts-alpine3.11

WORKDIR /my-app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

