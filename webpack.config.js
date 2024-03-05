const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /\.(woff2)$/i,
    }),
  ],
};
