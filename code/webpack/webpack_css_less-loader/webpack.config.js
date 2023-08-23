const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './bound')
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
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}
