module.exports = {
  '*.{ts,tsx}': () => ['yarn run lint --fix', 'yarn run check-types'],
  '*.{js,json,md}': () => 'yarn run format',
};
