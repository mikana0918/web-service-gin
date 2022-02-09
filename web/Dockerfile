FROM node:14-alpine

WORKDIR /frontend

COPY package.json /frontend/package.json 
COPY yarn.lock /frontend/yarn.lock 

RUN yarn 

COPY . .

RUN yarn build 

CMD ["yarn", "dev"]