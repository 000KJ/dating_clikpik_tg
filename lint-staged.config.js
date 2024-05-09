module.exports = {
  'src/**/*.{js,ts,}': [
    'prettier --write',
    () => 'tsc -p tsconfig.json --noEmit',
    'eslint --fix --max-warnings=0',
    'git add',
  ],
};
