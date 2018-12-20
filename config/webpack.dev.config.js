/*globals require, module */
const root = require('./helpers/root'),
  webpackMerge = require('webpack-merge'),
  commonConfig = require('./webpack.common.config.js');

module.exports = webpackMerge(commonConfig, {
  mode: "development",
  output: {
    path: root('build'),
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[name].map'
  },
  devServer: {
    port: 8000
  },
  devtool: 'eval-source-map'
});

