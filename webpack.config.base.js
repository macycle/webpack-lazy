const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
    )
  ],
    module: {
      rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {loader: 'file-loader'}
        ]
      }
    ]
    },
    devServer: {
           contentBase: './dist',
        }
  };


