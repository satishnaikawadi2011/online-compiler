FROM node

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install pm2 -g

COPY . .

RUN npm run build

EXPOSE 4000

WORKDIR /usr/app/dist

CMD ["pm2-runtime","src/app.js"]