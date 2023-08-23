const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
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
      // webpack5支持asset module 来替代raw-loader 、url-loader、file-loader
      {
        test: /\.(jpe?g|png|gif|svg)/,
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
      BASE_URL: '"./"'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
     
    })
  ]
}