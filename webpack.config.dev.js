const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),

  devtool: 'cheap-module-source-map',

  entry: {
    app: [
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
    vendor: ['react','react-dom'],
  },
  output: {
    filename: '[name].js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets:[
                ["es2015", {"modules": false}],
                // webpack understands the native import syntax, and uses it for tree shaking

                "react"
                // Transpile React components to JavaScript
              ],
              plugins: [
                "react-hot-loader/babel",
                // Enables React code to work with HMR.
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            sourceMap: true,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64:3]',
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};