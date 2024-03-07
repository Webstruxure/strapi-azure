FROM node:12-alpine

ENV PORT 80
ENV HOST 0.0.0.0
ENV NODE_ENV production

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install deps
COPY package*.json /usr/src/app/
COPY package-lock.json /usr/src/app/
# COPY yarn.lock /usr/src/app/
RUN npm install --force

COPY . /usr/src/app

RUN npm run build
EXPOSE 80

CMD ["npm", "start"]