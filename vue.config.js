const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
   lintOnSave: false, // eslint-loader 是否在保存的时候检查
    //postcss-pxtorem
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              autoprefixer(),
              pxtorem({
                minPixelValue: 1,
                unitPrecision: 3,
                rootValue: 144, //设计稿宽度为1440px的
                propList: ['*']
              })
            ]
          }
        }
    },
}
