FROM node:16.13.0
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . /app
CMD node new_index.js