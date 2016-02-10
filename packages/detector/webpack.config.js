var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    js: './index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'detector.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js']
  }
}