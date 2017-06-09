/* eslint comma-dangle: 0 */
// const HTMLWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');

module.exports = () => ({
  entry: {
    app: './index.js'
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    errorDetails: true,
    hash: false,
    progress: true,
    reasons: false,
    timings: true,
    version: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|dist)/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: false,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: path.join(process.cwd(), './postcss.config.js')
          }
        ]
      }
    ]
  },
  plugins: [new ProgressBarPlugin()]
});
