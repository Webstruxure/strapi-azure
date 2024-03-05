module.exports = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', '8664c92394c245d0a329eaa5744dd25a'),
    },
    url: '/',
    serveAdminPanel: false
  });