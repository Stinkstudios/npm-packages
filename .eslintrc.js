module.exports = {
	root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react', 'jsx-a11y', 'compat'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 0,
    'compat/compat': 2,
    'global-require': 0,
    'import/named': 2,
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    indent: [
      1,
      'tab',
      {
        SwitchCase: 1
      }
    ],
    'max-len': 0,
    'new-cap': [
      2,
      {
        capIsNew: false,
        newIsCap: true
      }
    ],
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-tabs': 0,
    'no-underscore-dangle': 0,
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any']
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': [1, 'tab'],
    'react/jsx-indent': [1, 'tab']
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    },
    polyfills: ['fetch']
  }
};
