module.exports = {
  '*.{ts,tsx}': () => ['npm run lint --fix', 'npm run check-types', 'npm run test-coverage'],
  '*.{js,json,md}': () => 'npm run format',
};
