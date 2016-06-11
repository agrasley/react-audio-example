'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: '#source-map',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: __dirname
  },
  plugins: [new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }]
  }
}
