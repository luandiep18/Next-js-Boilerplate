module.exports = {
  '*': ['eslint --fix --no-warn-ignored', 'git add'],
  '**/*.ts?(x)': () => 'npm run check-types',
};
