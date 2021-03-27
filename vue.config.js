const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path=require('path');  
const resolve = dir => path.join(__dirname, dir)
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
    chainWebpack: config => {
      config.resolve.alias .set('@', resolve('src'))
    },
    configureWebpack: {  
      resolve: {  
        extensions: ['js', 'vue'],  
        alias: {  
          '@': resolve('src')  
        }  
      }  
    }
}
