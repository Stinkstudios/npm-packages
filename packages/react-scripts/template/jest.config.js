'use strict';

const paths = require('../config/paths');

module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  resolver: require.resolve('jest-pnp-resolver'),
  setupFiles: [require.resolve('react-app-polyfill/jsdom')],
  setupTestFrameworkScriptFile: undefined,
  testMatch: [
    '<rootDir>/template/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/template/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [...paths.moduleFileExtensions, 'node'].filter(
    ext => !ext.includes('mjs')
  ),
};
