module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: process.env.PORT || env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8664c92394c245d0a329eaa5744dd25a'),
    },
    cors: {
      origin: ['*'],
    },
  },
});

const strapi = require('@strapi/strapi')
strapi().start()