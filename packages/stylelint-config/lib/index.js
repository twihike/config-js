module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    // eslint-disable-next-line unicorn/no-null
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'components',
          'extends',
          'screen',
          'tailwind',
          'utilities',
        ],
      },
    ],
    // eslint-disable-next-line unicorn/no-null
    'declaration-block-trailing-semicolon': null,
    // eslint-disable-next-line unicorn/no-null
    'no-descending-specificity': null,
  },
};
