import { validateRatio } from './validate-ratio';

const error = '\`addClass\` on ANONYMOUS. Values must be either namespaced Block names (https://github.com/stinkstudios/guidelines/tree/master/css#namespaces) or Element names (http://getbem.com/naming/). Other Component names NOT allowed.';

const typeError = type =>
	`Ratio must be a string, got ${type}`;

test('validation of prop type', () => {
	expect(validateRatio({'ratio': '1:1'}, 'ratio')).toBe(null);
	expect(validateRatio({'ratio': 'ratio'}, 'ratio')).toBe(null);
	expect(() => validateRatio({'ratio': 12121}, 'ratio').toThrow(typeError(typeof 12121)));
});
