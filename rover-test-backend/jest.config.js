let testMatch = [
  '**/__tests__/**/*.+(ts)',
  '**/?(*.)+(spec|test).+(ts)',
];

if (process.env.TEST === 'integration') {
  testMatch = ['**/*\\.integration\\.(spec|test)\\.ts'];
} else if (process.env.TEST === 'unit') {
  testMatch = ['**/*\\.unit\\.(spec|test)\\.ts'];
}

const config = {
  roots: [
    '<rootDir>/src',
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch,
  testEnvironment: '<rootDir>/test-env.ts',
  globalSetup: '<rootDir>/global-setup.ts',
  globalTeardown: '<rootDir>/global-teardown.ts',
  setupFiles: ['<rootDir>/setup-files.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-files-after-env.ts'],
  verbose: true,
  collectCoverage: process.env.COLLECT_COVERAGE === 'true',
  collectCoverageFrom: [
    '**/*.ts',
    '!**/*\\.(spec|test)\\.ts',
  ],
  coverageProvider: 'v8',
  coverageReporters: ['lcov', 'text-summary'],
  automock: false,
  clearMocks: true,
};

// eslint-disable-next-line import/no-default-export
module.exports = config;