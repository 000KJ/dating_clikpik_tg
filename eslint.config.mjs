import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
// import typescriptEslint from '@typescript-eslint/eslint-plugin';
// import parserEslint from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  eslintConfigPrettier,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
