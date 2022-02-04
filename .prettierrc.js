module.exports = {
  // 每行超过80个字符就会换行
  printwidth: 80,
  // 每行缩进 2 个字符
  tabWidth: 2,
  // 是否开启Tab键
  useTabs: false,
  // 使用单引号而不是双引号
  singleQuote: true,
  // 在语句的末尾是否要分号
  semi: false,
  trailingComma: 'es5',
  // 对象开头结尾都要有一个空格。
  bracketSpacing: true,
  // false 将多行 JSX 元素的 > 放在最后一行的末尾
  jsxBracketSameLine: false,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  arrowParens: 'avoid',
  // 维护现有的行尾
  endOfLine: 'auto'
}