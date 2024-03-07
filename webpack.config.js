const path = require('path');

module.exports = {
  entry: './config/server.js',
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: 'runtime~main.7c1f9226.js', 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};