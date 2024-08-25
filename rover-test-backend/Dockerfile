# Set the base image.
FROM node:18.20.2-alpine3.19 

COPY package.json /home/node/
WORKDIR /home/node/
RUN npm install
RUN npm install -g @nestjs/cli
ENV PATH /home/node/node_modules/.bin:$PATH

COPY . /home/node/app/
WORKDIR /home/node/app/