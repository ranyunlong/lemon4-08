// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}, // 自动添加浏览器私有前缀
    'postcss-px-to-viewport': { // 处理px 为vw 和 vh
      viewportWidth: 720, // 视窗可视区域宽度 设计稿的宽度
      // viewportHeight: '', // 设计稿的高度
      viewportUnit: 'vmin' // 默认以哪一条边为主做计算
    }
  }
}
