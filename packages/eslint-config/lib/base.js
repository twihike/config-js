module.exports = {
  env: {
    'shared-node-browser': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'airbnb-base',
  ],
  rules: {
    'no-use-before-define': ['error', 'nofunc'],
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
  ],
};
