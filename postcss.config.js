module.exports = {
	parser: 'postcss-scss',
	plugins: {
		'postcss-import': {
			path: [
			],
		},
		'postcss-for': {},
		'postcss-each': {},
		'postcss-mixins': {},
		'postcss-simple-vars': {},
		'postcss-nested': {},
		'postcss-conditionals': {},
		'postcss-math': {},
		'postcss-focus': {},
		'postcss-cssnext': {},
		'postcss-reporter': {
			clearMessages: true,
		},
	},
};
