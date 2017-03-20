import { validateRatio } from './validate-ratio';

const error = 'Ratio prop must be supplied in the format "W:H", where W and H are a number';

const typeError = type =>
  `Ratio must be a string, got ${type}`;

test('validation of prop type', () => {
  expect(validateRatio({'ratio': '1:1'}, 'ratio')).toBe(null);
  expect(validateRatio({'ratio': 'ratio'}, 'ratio')).toBe(null);
  expect(() => validateRatio({'ratio': 12121}, 'ratio').toThrow(typeError(typeof 12121)));
});
