# FROM node:16-alpine

# ENV PORT 8080
# ENV HOST 0.0.0.0
# ENV NODE_ENV production

# create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# install deps
# COPY package*.json /usr/src/app/
# COPY package-lock.json /usr/src/app/
# RUN npm install strapi@latest --force


# COPY . /usr/src/app

# RUN npm run build
# EXPOSE 8080

# CMD ["npm", "start"]


FROM node:16-alpine

ENV PORT 8080
ENV HOST 0.0.0.0
ENV NODE_ENV production

# Set the working directory
WORKDIR /usr/src/app

# Install Strapi
RUN npm install strapi@latest --force

COPY package*.json ./

# Install dependencies
RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 8080

# Health check configuration
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:8080 || exit 1


CMD ["npm", "start"]
