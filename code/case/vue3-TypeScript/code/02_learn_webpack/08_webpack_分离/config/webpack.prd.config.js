const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const Common = require('./webpack.common.config.js') 
module.exports = merge(Common, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    }),
    new CleanWebpackPlugin(),
  ]
})