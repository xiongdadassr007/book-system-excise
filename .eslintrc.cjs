/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index']
      }
    ],
    'vue/no-setup-props-destructure': ['off'],
    // 未定义变量错误提示，'off'关闭校验
    'no-undef': 'error'
  }
}
