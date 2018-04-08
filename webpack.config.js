const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DIST_DIR = path.resolve(__dirname, './dist')
const SRC_DIR = path.resolve(__dirname, './src')

module.exports = {
  entry: [`${SRC_DIR}/js/index.js`],
  output: {
    path: `${DIST_DIR}`,
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'env', 'stage-2'], plugins: ['transform-decorators-legacy'] }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: './.eslintrc.js'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './dist/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'css/styles.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),
    host: 'localhost',
    port: 9090,
    historyApiFallback: true
  }
}

