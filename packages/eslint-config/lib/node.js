module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['plugin:node/recommended'],
  rules: {
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
