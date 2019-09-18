const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathClient = path.join(__dirname, '../../source/scripts');
const publicPath = '/';

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': path.join(pathClient, '/index.ts')
  },
  resolve: {
    extensions: ['.ts','.js', '.styl'],
    alias: {
      '@app': pathClient
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader']
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'source/view/index.pug',
      inject: false
    })
  ]
}
