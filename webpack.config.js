'use strict'

const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: '#source-map',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: __dirname
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }]
  }
}
