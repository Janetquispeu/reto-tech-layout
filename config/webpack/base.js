const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pathClient = path.join(__dirname, '../../src/scripts');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    'app': path.join(pathClient, '/index.js')
  },
  resolve: {
    extensions: ['.js', '.styl'],
    alias: {
      '@app': pathClient
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|jpg|png|svg|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath: '/'
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
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          { loader: 'postcss-loader'},
          { loader: 'stylus-loader'}
        ]
      },
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/view/index.pug'
    }),
    new CopyWebpackPlugin([{
      from: './src/img',
      to: ''
    }]), 
  ]
}
