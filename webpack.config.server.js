const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'server/server.js'),

  output: {
    filename: 'server.bundle.js',
    path: __dirname + '/dist/',
  },

  target: 'node', // in order to ignore built-in modules like path, fs, etc.

  node: {
    __filename: true,
    __dirname: true
  },

  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'src',
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'css/app.css', disable: false, allChunks: true }),
  ]
};