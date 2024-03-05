const webpack = require('webpack');

module.exports = {
    module: {
      rules: [
        {
          test: /\.woff2$/,
          use: 'null-loader',
        },
      ],
    },
  };
  
