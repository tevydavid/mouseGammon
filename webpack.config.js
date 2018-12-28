var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.jsx',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};


