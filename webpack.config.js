/* eslint comma-dangle: 0 */
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	inject: 'body',
	template: `${__dirname}/example/index.html`,
	output: `${__dirname}/dist/index.html`
});

module.exports = {
	entry: {
		app: './example/index.js'
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
	plugins: [
		HTMLWebpackPluginConfig
	]
};
