const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base=require('./webpack.config.base');

module.exports = {
  ...base,
  mode: 'production',
  plugins: [new HtmlWebpackPlugin(
      {
    title: 'hello',
    template: 'src/asset/index.html'
  }
  ),
  new MiniCssExtractPlugin({
    
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  })
],

  module: {
    rules: [
      ...base.module.rules,     //写在rules里面，而不是写在外面，不然会覆盖整个原有的rules，写在里面的话，相当于插入。
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/',
            },
          },
          'css-loader',
        ]
      }
    ]
  },
};


