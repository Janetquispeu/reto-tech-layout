const path = require('path');
const merge = require('webpack-merge');
const common = require('./base.js');
const publicPath = '/';
const outputPath = path.join(__dirname, '../../');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(outputPath, 'dist/public'),
    publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    }
  }
});