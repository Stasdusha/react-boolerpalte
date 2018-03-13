const { resolve } = require('path')
const rules = require('./rules')
const plugins = require('./plugins')
const devServer = require('./dev_server')
const devtool = require('./dev_tool')
const alias = require('./alias')

const settings = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    alias
  },
  context: resolve(__dirname, '..'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/index'
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '..', 'dist')
  },
  module: {
    rules
  },
  plugins,
  devtool,
  devServer
}

module.exports = settings
