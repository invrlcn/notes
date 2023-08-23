const path = require('path')
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,  //正则表达式
        // 1.loader的写法(语法糖)
        // loader: 'css-loader',
        // 2.完整的写法
        use: [
          // { loader: 'css-loader', options: {}},
          "style-loader",
          "css-loader",
          "postcss-loader"
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('postcss-preset-env')
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }

      // 合并写法
      // {
      //   test: /\.css$|\.less$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     "less-loader",
      //   ]
      // }
    ]
  }
}