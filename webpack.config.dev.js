const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-hot-middleware/client',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './client.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'build'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};