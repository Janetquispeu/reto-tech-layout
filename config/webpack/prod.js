const path = require('path');
const merge = require('webpack-merge');
const common = require('./base.js');
const publicPath = '/';
const outputPath = path.join(__dirname, '../../');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(outputPath, 'dist/'),
    filename:'[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    }
  }
});