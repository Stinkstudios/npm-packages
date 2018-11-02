'use strict';

var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    js: './index.js',
  },
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'detector.min.js',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(pkg.version),
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
};
