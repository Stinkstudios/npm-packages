'use strict';

const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:compat/recommended',
    'prettier',
    'prettier/react',
  ],

  plugins: ['compat', 'import', 'jsx-a11y', 'unicorn', 'react', 'jest'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },

      warnOnUnsupportedTypeScriptVersion: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/@typescript-eslint',
    ],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
      },
    },
  },

  rules: {
    'no-console': 'warn',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/prefer-default-export': 0,

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'unicorn/no-abusive-eslint-disable': 0,

    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
  },
};
