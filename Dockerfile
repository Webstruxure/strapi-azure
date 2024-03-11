FROM node:16-alpine

ENV PORT 8080
ENV HOST 0.0.0.0
ENV NODE_ENV production

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install deps
COPY package*.json /usr/src/app/
COPY package-lock.json /usr/src/app/
# COPY yarn.lock /usr/src/app/
#RUN npm install --force
RUN npm install strapi@latest --force


COPY . /usr/src/app

RUN npm run build
EXPOSE 8080

CMD ["npm", "start"]