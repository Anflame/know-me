module.exports = {
  '*.{ts,tsx}': () => ['npm run lint --fix', 'npm run test -- --findRelatedTests'],
  '*.{js,json,md}': () => 'npm run format',
};
