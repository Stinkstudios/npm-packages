'use strict';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx,mjs}',
    '!src/**/*.{module.css.d.ts,css.d.ts}',
    '!src/__tests__/**/*.{module.css.d.ts,css.d.ts,ts}',
  ],
};
