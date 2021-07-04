module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node-modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
