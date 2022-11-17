module.exports = {
  plugins: ['tailwindcss'],
  extends: [
    require.resolve('prefer-code-style/lib/eslint'),
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    /* 你仍然可以在这里配置你的规则偏好。 */
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
