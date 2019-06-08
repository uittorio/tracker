/*globals require, module */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!raw-loader!sass-loader'
      }
    ]
  },
  entry: {
    app: ['./src/main.tsx']
  },
  resolve: {
    extensions: ['.ts', ".tsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/resources',
        to: 'resources'
      }
    ])
  ]
};
