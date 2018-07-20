module.exports = {
  testMatch: [
    '**/**/specs/*spec.js?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  coveragePathIgnorePatterns: [],
  automock: false,
  setupFiles: [
    './jestSetup.js'
  ]
};
