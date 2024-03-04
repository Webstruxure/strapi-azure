module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: 'https://strapi-webapp-new.azurewebsites.net',
  });

module.exports = ({ env }) => ({
auth: {
    secret: env('ADMIN_JWT_SECRET'),
},
url: '/',
serveAdminPanel: false
});