const path = require('path')
module.exports = {
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
  }
}