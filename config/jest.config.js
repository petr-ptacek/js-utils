const path = require('path');

/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  cache: true,
  automock: false,
  clearMocks: true,
  resetMocks: false,
  restoreMocks: false,
  testEnvironment: 'jsdom', // node,
  testEnvironmentOptions: {},
  cacheDirectory: path.resolve(__dirname, '../.cache'),
  verbose: true,
  testMatch: [
    '**/(__tests__|tests)/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)'
  ],
  rootDir: path.resolve(__dirname, '..'),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(__dirname, 'tsconfig.jest.json')
    }
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
};

module.exports = config;