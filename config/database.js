try {
  module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'sqlite',
          // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          filename: env('DATABASE_FILENAME', './data.db'),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  });
} catch (error) {
  console.error('Database start:', error.message);
}