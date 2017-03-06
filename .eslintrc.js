module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8, //指定ECMAScript支持的版本，6为ES6，这里为了兼容async和await，设置为8
    sourceType: 'module'
  },
  env: {
   browser: true, // 预定义的全局变量，这里是浏览器环境
  },
  extends: 'standard',
  plugins: [
    'html',
    'promise'
  ],
  rules: {
    // allow console
    'no-console': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': 0,
    // 可以不使用驼峰命名法
    // 'camelcase': 0,
    // 不强制引号类型
    // 'quotes': 0
  }
}
