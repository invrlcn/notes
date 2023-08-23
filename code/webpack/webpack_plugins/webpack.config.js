const path = require('path')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { HtmlWebpackPlugin } = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', 'ts'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 写法一:
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: ['autoprefixer']
          //     }
          //   }
          // }
        ]

        // 写法二:
        // use:['style-loader', 'css-loader']

        // 写法三:
        // loader: 'css-loader'
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.png|jpe?g|gif|svg$/,
        //1.  asset/resource
        // 类似于file-loader: 对于img等文件会单独打包成文件造成会多次请求

        //2.  asset/inline
        // 类似于url-loader: 对图片进行base64编码,然后放到打包的文件中,会造成下载文件过慢

        //3.  asset
        // 根据设置会自动选择,文件过大,单独打包成一个,小文件一起打包
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader'
          // options: {
          //   preset: ['@babel/preset-env']
          // }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
    // new HtmlWebpackPlugin({
    //   title: 'webpack-plugin',
    // })
  ],
  devServer: {
    hot: true
  }
}
