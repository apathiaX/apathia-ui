module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    // prettier
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    curly: 'off',
    quotes: ['error', 'single'],
    'vue/require-default-prop': 'off',
    'vue/script-setup-uses-vars': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: false,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
      },
    ],

    // typescript
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
}
