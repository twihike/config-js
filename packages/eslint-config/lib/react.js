module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/boolean-prop-naming': 'off',
    'react/forbid-component-props': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-depth': ['warn', { max: 5 }],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
      },
    ],
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/no-set-state': 'off',
    'react/prefer-read-only-props': 'off',
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'jsx-a11y/lang': 'error',
    'jsx-a11y/no-autofocus': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              pascalCase: true,
            },
          },
        ],
      },
    },
  ],
};
