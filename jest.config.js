module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/test'
  ],
  coverageDirectory: './build/coverage',
  setupFiles: [ './test/jest.setup.js' ],
  roots: [
    '<rootDir>/src'
  ],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/$1'
  },
  reporters: [
    'default',
    'jest-junit'
  ]
};