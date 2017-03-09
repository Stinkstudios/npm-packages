/* eslint comma-dangle: 0 */
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	inject: 'body',
	template: `${__dirname}/example/index.html`,
	output: `${__dirname}/dist/index.html`
});

const prod = process.env.NODE_ENV === 'production';

function getEntrySources() {
	if (!prod) {
		return ['./example/index.js'];
	}
	return ['components.js'];
}

module.exports = {
	entry: {
		app: getEntrySources()
	},
	devtool: 'cheap-module-eval-source-map',
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
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
  module: {
		rules: [
			{
				test: /\.js$/,
        loader: 'babel-loader',
				exclude: /(node_modules|dist)/,
        query: {
          cacheDirectory: true,
        }
			}, {
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: prod ? [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false
			}
		})
	] : [
    HTMLWebpackPluginConfig
  ]
};
