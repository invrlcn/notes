const { merge } = require('webpack-merge')
const Common = require('./webpack.common.config.js') 

module.exports = merge(Common, {
  mode: 'development',
    // 设置source-map, 建立js映射文件, 方便调试代码和错误
    devtool: 'source-map',
    devServer: {
      open: true,
      static: './',  // 当webpack打包的时候，对于没有在webpack依赖图中的内容,会去这里定义的目录下面找 (原来是contentBase)
      hot: true,
      // host: '0, 0, 0, 0',// 当设置成0,0,0，0时，在同一个网段下的主机中，通过ip地址是可以访问的（手机）
      port: '9001',
      // compress: true, // 开启gzip  默认为false
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
          pathRewrite: {'^/api': ''},  // 重写/api
          secure: false,  // 默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false
          changeOrigin: true,  // 它表示是否更新代理后请求的headers中host地址
          // 解决SPA页面在路由跳转之后，进行页面刷新时，返回404的错误
          historyApiFallback: true, // 设置为true，那么在刷新时，返回404错误时，会自动返回 index.html 的内容
        }
      }
    },
})