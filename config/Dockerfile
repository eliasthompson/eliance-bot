FROM node:latest

WORKDIR /usr/src/app

COPY src ./src
COPY config/index.js ./config/index.js
COPY package*.json ./
RUN npm install --only=production

ENTRYPOINT ["npm", "run"]
CMD ["serve"]

EXPOSE 4000
