module.exports = {
  extends: ['@redteclab/eslint-config-shopapotheke'],
  overrides: [
    {
      files: ['__integration-tests__/**/*.ts'],
      rules: {
        'max-lines-per-function': ['error', 1500],
      },
    },
  ],
  rules: {
    'no-underscore-dangle': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'import/no-default-export': 'off',
  },
}
