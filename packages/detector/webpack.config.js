var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    js: './index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'detector.min.js',
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}