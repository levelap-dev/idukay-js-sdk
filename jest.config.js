module.exports = {
  presets: ['es2015'],
  testMatch: [
    '**/**/specs/*spec.js?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  coveragePathIgnorePatterns: []
};
