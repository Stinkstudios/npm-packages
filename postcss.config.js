const path = require('path');

module.exports = {
	parser: 'postcss-scss',
	plugins: {
		'postcss-import': {
			path: [
				path.join(process.cwd()),
				path.join(process.cwd(), 'base'),
				path.join(process.cwd(), 'base', 'vars'),
				path.join(process.cwd(), 'base', 'utilities'),
				path.join(process.cwd(), 'base', 'objects'),
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
