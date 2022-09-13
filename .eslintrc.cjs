/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:vitest-globals/recommended',
  ],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/unit_test/**/*.spec.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
      env: {
        'vitest-globals/env': true,
      },
    },
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
