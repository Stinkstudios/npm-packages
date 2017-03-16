import { validateClassNames } from './validate-class';

const error = '\`addClass\` on ANONYMOUS. Values must be either namespaced Block names (https://github.com/stinkstudios/guidelines/tree/master/css#namespaces) or Element names (http://getbem.com/naming/). Other Component names NOT allowed.';

const typeError = type =>
	`Classnames must be a string, got ${type}`;

test('validation of valid classnames', () => {
	expect(validateClassNames({'addClass': 'block__element'}, 'addClass')).toBe(null)
	expect(validateClassNames({'addClass': 'block__element--modifier'}, 'addClass')).toBe(null)
});

test('validation of invalid classnames', () => {
	expect(() => validateClassNames({'addClass': 4}, 'addClass').toThrow())
	expect(() => validateClassNames({'addClass': '4'}, 'addClass').toThrow(error))
	expect(() => validateClassNames({'addClass': 4}, 'addClass').toThrow(typeError(typeof 4)))
});
