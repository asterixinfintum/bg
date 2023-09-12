FROM node:18
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
ENV PORT 8084
ENV SECRET_KEY_JWT your_secret_key_here
ENV MASTER_KEY your_master_key_here

ENV BITNODE value_here
ENV BITNODEK value_here
ENV NET mainnet
ENV VGD value_here
ENV TRADERAPIURL value_here

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]