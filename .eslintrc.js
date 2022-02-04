// 需要的相关的插件  eslint prettier @typescript-eslint/eslint-plugin  @typescript-eslint/parser @vue/eslint-config-prettier @vue/eslint-config-typescript
// babel-eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
// 代码规范校验
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineComponent: 'readonly',
    defineExpose: 'readonly',
  },
}
