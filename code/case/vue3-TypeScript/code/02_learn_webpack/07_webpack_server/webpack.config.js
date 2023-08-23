const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
module.exports = {
  target: "web",
  // 设置模式
  // development 开发阶段, 会设置development
  // production 准备打包上线的时候, 设置production
  mode: 'development',
  // 设置source-map, 建立js映射文件, 方便调试代码和错误
  devtool: 'source-map',
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // assetModuleFilename: 'img/[name]_[hash:6][ext]'  webpack5支持asset module 来替代raw-loader 、url-loader、file-loader
  },
  devServer: {
    open: true,
    contentBase: './public',  // 当webpack打包的时候，对于没有在webpack依赖图中的内容,会去这里定义的目录下面找 (最新是static默认public)
    hot: true,
    // host: '0, 0, 0, 0',// 当设置成0,0,0，0时，在同一个网段下的主机中，通过ip地址是可以访问的（手机）
    port: '9000',
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
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'js': path.resolve(__dirname, './src/js')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,  //正则表达式
        // 1.loader的写法(语法糖)
        // loader: 'css-loader',
        // 2.完整的写法
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      // webpack4使用 file-loader url-loader
      // {
      //   // test: /\.(jpg|jpeg|png|gif|svg)$/,
      //   test: /\.(jpe?g|png|gif|svg)$/,  // 一样的写法 ? 正则表示0或者1
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       outputPath: '/img',
      //       name: '[name]_[hash:6].[ext]',
      //       limit: 10 * 1024
      //     },
      //   }       
      // },
      // {
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: './img',
      //       name: '[name]_[hash:6].[ext]',
      //     }
      //   }
      // },
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: './font',
      //       name: '[name]_[hash:6].[ext]'
      //     }
      //   }
      // },
      // webpack5支持asset module type 来替代raw-loader 、url-loader、file-loader
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack项目',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       to: './',
    //       globOptions: {
    //         ignore: [
    //           '**/index.html'
    //         ]
    //       }
    //     }
    //   ]
    // }),
    new VueLoaderPlugin()
  ]
}