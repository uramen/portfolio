const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    stats: 'errors-only',
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'sass-loader',
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[hash].[ext]'
        }
      },
      {
        test: /\.woff$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf$|\.eot$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]'
        }
      },
      {
         test: /\.json$/,
         use: 'json-loader'
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
     title: 'Portfolio',
     inject: false,
     template: require('html-webpack-template'),
     appMountId: 'root',
     mobile: true
   }),
  ],
};
