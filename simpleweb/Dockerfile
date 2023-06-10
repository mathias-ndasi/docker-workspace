# Specify a base image
FROM node:20-alpine

WORKDIR /home/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Setup a default command
CMD ["npm", "start"]
