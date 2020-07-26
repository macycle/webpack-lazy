const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
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
  devServer: {
         contentBase: './dist',
      },
};


