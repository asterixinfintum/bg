FROM node:16
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
ENV PORT 8081
ENV DB mongodb://db:27017/verificationapi

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]