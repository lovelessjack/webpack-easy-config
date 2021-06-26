// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true, //此项是用来告诉eslint找当前配置文件不能往父级查找
  parser: "babel-eslint", //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parserOptions: { //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    sourceType: "module"
  },
  env: {
    browser: true, //此项指定环境的全局变量，下面的配置指定为浏览器环境
    node: true // node环境
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "standard" // 标准的standard.js风格 覆盖上面配置 https://standardjs.com/rules-zhcn.html#javascript-standard-style
  ],
  plugins: [
    "vue" // 插件名称省略了eslint-plugin-X 规范 *.vue 文件
  ],
  // ESLint中的globals——向ESLint规则中添加全局变量
  globals: { // 防止 文件中用的全局变量报错，在此声明 不会提示 XXX is not defined
    // readonly/false——只读
    // writable/true——可写
    // off——禁用该全局变量
    // 说明：true/false 等价于只读/可写，但不推荐使用。详见ESLint官网：http://eslint.cn/docs/user-guide/configuring#specifying-globals
    // For historical reasons, 由于历史原因，
    // the boolean value false and the string value "readable" are equivalent to "readonly". 布尔值 false 和字符串值 "readable" 等价于 "readonly"。
    // Similarly, the boolean value true and the string value "writeable" are equivalent to "writable". 类似地，布尔值 true 和字符串值 "writeable" 等价于 "writable"。
    // However, the use of older values is deprecated. 但是，不建议使用旧值。
    window: "writable",
    document: "writable",
    Promise: "writable",
    localStorage: "writable"
  },
  rules: {
    /**
     * vue文件属性顺序
     * vue/recommended 配置https://vuejs.github.io/eslint-plugin-vue/rules/order-in-components.html
     */
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }],
    // vue script 首行2空格缩进, 配合overrides只在.vue中起作用 https://vuejs.github.io/eslint-plugin-vue/rules/script-indent.html
    "vue/script-indent": ["error", 2, { "baseIndent": 1 }],
    // 此规则仅检查.vue文件，不干扰其他.js文件。不幸的是，indent打开时的默认规则将尝试对两者进行 lint，
    // 因此为了使它们互补，您可以对文件使用overrides设置和禁用indent规则.vue：
    "overrides": [
      {
        "files": ["*.vue"],
        "rules": {
          "indent": "off"
        }
      }
    ],
    // props 总是 中横线命名
    "vue/attribute-hyphenation": ["always", {
      "ignore": []
    }],
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true, // 当给定元素没有属性时，允许在一行中包含内容
      "ignoreWhenEmpty": true, // 当元素没有内容时禁用报告
      "ignores": ["pre", "textarea"] // 元素名称的配置以忽略换行符样式。
    }],
    // 标签括号前后空格
    "vue/html-closing-bracket-spacing": "off",
    // HTML多节点换行
    "vue/multiline-html-element-content-newline": "off",
    // 可以使用v-html
    "vue/no-v-html": "off",
    // html常规标签自动关闭不限制
    "vue/html-self-closing": ["error", {
      'html': {
        'void': 'never',
        'normal': 'any',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 不要留超过规定数目的空白行
    "no-multiple-empty-lines": [2, { "max": 3 }],
    // 不能使用__dirname或__filename做路径拼接
    "no-path-concat": 0,
    // 禁止行末加空格关闭
    "no-trailing-spaces": "off",
    // 规定了参数是否需要圆括号包围
    "arrow-parens": 0,
    // 规定generator函数中星号前后的空白
    "generator-star-spacing": 0,
  
    "import/no-named-as-default": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "no-redeclare": 0,
    // vue 标签单行最多允许的属性数
    "vue/max-attributes-per-line": [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 2,
          allowFirstLine: true
        }
      }
    ]
  }
}
