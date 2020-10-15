module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  ignorePatterns: ['functions/*'],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'vue/html-self-closing': ['error', {
      html: {
        normal: 'never',
      },
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true,
      },
    }],
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'always'],
  },
};
