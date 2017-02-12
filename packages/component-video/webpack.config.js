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
		version: false
	},
	output: {
		path: prod ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'example'),
		publicPath: 'http://localhost:8080/example',
		filename: prod ? 'component-video.js' : 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /(node_modules|dist|lib|es)/,
			query: {
				cacheDirectory: true,
				plugins: [
					['transform-class-properties', { loose: true }],
					['transform-es2015-template-literals', { loose: true }],
					'transform-es2015-literals',
					'transform-es2015-function-name',
					'transform-es2015-arrow-functions',
					'transform-es2015-block-scoped-functions',
					['transform-es2015-classes', { loose: true }],
					'transform-es2015-object-super',
					'transform-es2015-shorthand-properties',
					['transform-es2015-computed-properties', { loose: true }],
					['transform-es2015-for-of', { loose: true }],
					'transform-es2015-sticky-regex',
					'transform-es2015-unicode-regex',
					'check-es2015-constants',
					['transform-es2015-spread', { loose: true }],
					'transform-es2015-parameters',
					['transform-es2015-destructuring', { loose: true }],
					'transform-es2015-block-scoping',
					'transform-object-rest-spread',
					'add-module-exports',
					['transform-es2015-modules-commonjs', { loose: true }]
				]
			}
		}]
	},
	plugins: prod ? [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false
			}
		})
	] : []
};
