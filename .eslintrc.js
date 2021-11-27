module.exports = {
  env: {
    browser: true,
    jquery: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    indent: ['error', 2, { switchCase: 1 }],
    quote: ['error', 'double'],
    semi: ['error', 'always'],
    'no-unused-vars': ['error', { var: 'all', args: 'none' }],
    'no-console': ['off']
  }
};
