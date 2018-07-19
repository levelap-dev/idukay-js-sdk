module.exports = {
  presets: ['env'],
  testMatch: [
    '**/**/specs/*spec.js?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  coveragePathIgnorePatterns: []
};
