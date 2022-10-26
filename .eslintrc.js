module.exports = {
  extends: [
    //用于继承现有的规则，比如Eslint官方规则：eslint-recommended 
    //                      Vue-Cli官方规则：plugin:vue/essential
    //                      React Cli官方规则：react-app
    // 继承Eslint的规则
    "eslint:recommended"
  ],
  env: {
    node: true,  //启用node 中全局变量
    browser: true  //启用浏览器中的全局变量
  },
  parserOptions: {
    ecmaVersion: 6,  //ES语法版本
    sourceType: 'module', //ES模块化
    ecmaFeatures: {  // ES 其他特性
      jsx: true  //如果时react项目 则需要开启jsx语法检查
    }
  },
  rules: {
    // 'off' 或 0 ，关闭规则
    // 'warn' 或 1 ，开启规则，使用警告级别的错误，不会导致程序退出
    // 'error' 或 2 ，开启规则，使用错误级别的错误，当触发的时候会导致程序退出
    semi: 'off', //禁止使用分号
    'array-callback-return': 'warn', //强制数组方法的回调函数中有return，语句，否则警告
    // 'default-case': [
    //   'warn',  //要求switch语句中有 default分支语句，否则警告
    //   { commentPattren: '^no default$' } //允许在最后注释 no default 就不会有警告了
    // ],
    eqeqeq: [
      'warn',  //强制使用 === 或!=== 否则警告
      'smart'
    ],
    'no-var': 'error' //不能使用var定义变量
  },
}