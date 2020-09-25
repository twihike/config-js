module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: { sourceType: 'module' },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'spaced-comment': ['error', 'always', { markers: ['/'] }],

        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-dynamic-delete': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'error', // recommend since v3
        '@typescript-eslint/no-extraneous-class': 'warn',
        '@typescript-eslint/no-invalid-void-type': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // recommend since v3
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'warn',

        // Extension rules

        'brace-style': 'off',
        '@typescript-eslint/brace-style': 'error',

        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': 'error',

        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'error',

        indent: 'off',
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            SwitchCase: 1,
          },
        ],

        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',

        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'error',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',

        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': [
          'error',
          'all',
          { ignoreJSX: 'multi-line' },
        ],

        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',

        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',

        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': ['off', { ignore: [-1, 0, 1] }],

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single'],

        semi: 'off',
        '@typescript-eslint/semi': 'error',

        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
      },
    },
  ],
};
