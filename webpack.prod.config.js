const config = require('./webpack.config.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
);

config.plugins.push(
  new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      compress: {
        warnings: true
      }
    }
  })
);


module.exports = config;