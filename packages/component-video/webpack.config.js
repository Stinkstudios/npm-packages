/* eslint comma-dangle: 0 */
const webpack = require('webpack');
const path = require('path');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
	entry: {
		app: !prod ? ['./example/main.js'] : ['./src/index.js'],
	},
	devtool: !prod ? 'cheap-module-eval-source-map' : '',
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
		version: false,
	},
	output: {
		path: prod
			? path.resolve(__dirname, 'dist')
			: path.resolve(__dirname, 'example'),
		publicPath: 'http://localhost:8080/example',
		filename: prod ? 'component-video.js' : 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: prod
		? [
				new webpack.optimize.OccurrenceOrderPlugin(),
				new webpack.optimize.UglifyJsPlugin({
					compress: {
						screw_ie8: true,
						warnings: false,
					},
				}),
		  ]
		: [],
};
