FROM node:12

#Create app directory
WORKDIR /app


#Install app dependencies
COPY package*.json ./

RUN yarn --production

ENV NODE_ENV production

#Bundle app source code
COPY . .

EXPOSE 8080
CMD ["ts-node","./server.ts"]