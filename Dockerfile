FROM node:7-alpine

RUN mkdir /worker

WORKDIR /worker
ADD . /worker/

RUN npm install
ENTRYPOINT ["npm", "run", "run:server"]
