/* eslint comma-dangle: 0 */
const webpack = require('webpack');
const path = require('path');

const prod = process.env.NODE_ENV === 'production';

function getEntrySources() {
	if (!prod) {
		return ['./example/main.js'];
	}
	return ['./src/index.js'];
}

module.exports = {
	entry: {
		app: getEntrySources()
	},
	devTools: !prod ? 'cheap-module-eval-source-map' : '',
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
		path: prod ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'example'),
		publicPath: 'http://localhost:8080/',
		filename: prod ? './component-video.js' : 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /(node_modules|build|lib)/,
			query: {
				plugins: ['add-module-exports'],
				presets: ['es2015', 'stage-0']
			}
		}]
	},
	plugins: prod ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false
			}
		})
	] : []
};
