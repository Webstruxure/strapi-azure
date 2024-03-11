try {
  module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    // port: process.env.PORT || env.int('PORT', 1337),
    port: process.env.PORT || env.int('PORT', 8080),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', '8664c92394c245d0a329eaa5744dd25a'),
      },
      cors: {
        origin: ['*'],
      },
    },
  });
} catch (error) {
  console.error('Server js start:', error.message);
}