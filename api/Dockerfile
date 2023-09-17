FROM node:16
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
ENV PORT 8001
ENV SECRET_KEY_JWT your_secret_key_here
ENV MASTER_KEY your_master_key_here
ENV BITNODE value_here
ENV BITNODEK value_here
ENV VGD value_here
ENV NET mainnet
ENV DB mongodb://db:27017/traderapiv1

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]