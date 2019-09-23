'use strict';

const config = require('../src');
const fs = require('fs');
const stylelint = require('stylelint');

const validCss = fs.readFileSync('./__tests__/css-valid.css', 'utf-8');
const invalidCss = fs.readFileSync('./__tests__/css-invalid.css', 'utf-8');
const validCssModule = fs.readFileSync(
  './__tests__/css-valid.module.css',
  'utf-8'
);

describe('flags no warnings with valid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    });
  });

  it('did not error', () => {
    return result.then(data => expect(data.errored).toBeFalsy());
  });

  it('flags no warnings', () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(0)
    );
  });
});

describe('flags warnings with invalid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it('did error', () => {
    return result.then(data => {
      return expect(data.errored).toBeTruthy();
    });
  });

  it('flags one warning', () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(1)
    );
  });

  it('correct warning text', () =>
    result.then(data =>
      expect(data.results[0].warnings[0].text).toBe(
        'Expected "display" to come before "top" (order/properties-order)'
      )
    ));

  it('correct rule flagged', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].rule).toBe('order/properties-order')
    );
  });

  it('correct severity flagged', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].severity).toBe('error')
    );
  });

  it('correct line number', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].line).toEqual(3)
    );
  });

  it('correct column number', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].column).toEqual(3)
    );
  });
});

describe('flags no warnings with valid css modules', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCssModule,
      config,
    });
  });

  it('did not error', () => {
    return result.then(data => expect(data.errored).toBeFalsy());
  });

  it('flags no warnings', () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(0)
    );
  });
});
