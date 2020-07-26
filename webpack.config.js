const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base=require('./webpack.config.base');

module.exports = {
  ...base,
  mode: 'development',
  plugins: [
    ...base.plugins
],

  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  }
};


