module.exports = {
  plugins: {
    'postcss-import': {}, // 支出@import css 输出文件
    'postcss-url': {},
    "autoprefixer": {}, // 浏览器兼容补全
    'postcss-plugin-px2rem': {
      rootValue: 100, // font-size root 值
      unitPrecision: 5, // 保留小数
      replace: true, // 是否rem替换px
      minPixelValue: 2 // >=2px替换
    }
  }
}
