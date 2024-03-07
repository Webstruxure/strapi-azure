module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 80),
  url: 'https://strapi-webapp-new.azurewebsites.net',
});