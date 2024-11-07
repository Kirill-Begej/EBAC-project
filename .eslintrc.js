module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}
