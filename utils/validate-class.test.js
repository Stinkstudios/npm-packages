import { validateClassNames } from './validate-class';

const error = `\`classNames\` on ANONYMOUS. Values must be either namespaced Block names (https://github.com/stinkstudios/guidelines/tree/master/css#namespaces) or Element names (http://getbem.com/naming/). Other Component names are NOT allowed.`;

const typeError = type =>
  `\`classNames\` must be an array (of strings); current type: ${type}`;

test('validation of valid class names', () => {
  expect(
    validateClassNames({ classNames: ['block__element'] }, 'classNames')
  ).toBe(null);
  expect(
    validateClassNames(
      { classNames: ['block__element--modifier'] },
      'classNames'
    )
  ).toBe(null);
  expect(validateClassNames({ classNames: ['u-overlay'] }, 'classNames')).toBe(
    null
  );
  expect(validateClassNames({ classNames: ['o-link'] }, 'classNames')).toBe(
    null
  );
});

test('validation of invalid class names', () => {
  expect(() =>
    validateClassNames({ classNames: ['button'] }, 'classNames')
  ).toThrow(error);
  expect(() =>
    validateClassNames({ classNames: 'button' }, 'classNames')
  ).toThrow(typeError(typeof 'button'));
  expect(() => validateClassNames({ classNames: 4 }, 'classNames')).toThrow(
    typeError(typeof 4)
  );
});
