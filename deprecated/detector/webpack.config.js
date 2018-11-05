'use strict';

var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'detector.min.js',
    library: 'detector',
    libraryTarget: 'umd',
  },
  target: 'web',
  devtool: 'source-map',
};
