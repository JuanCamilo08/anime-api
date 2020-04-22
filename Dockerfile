FROM node:13.13.0

WORKDIR /my-app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

