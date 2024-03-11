try {
  const strapi = require('@strapi/strapi')
  strapi().start()
} catch (error) {
  console.error('Strapi start:', error.message);
}