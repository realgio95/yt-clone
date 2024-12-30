# use an official node runtime as a parent image
# built on top of a linux image
FROM node:18

# set the working directory in the container
WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y ffmpeg

# Install dependencies
RUN npm install

# Install ts-node globally
RUN npm install -g ts-node typescript

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]