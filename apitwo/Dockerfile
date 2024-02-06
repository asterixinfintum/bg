FROM node:16
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
ENV PORT 8002
ENV DB mongodb://db:27017/traderapiv1

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]