require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const jsCwd = path.join(process.cwd(), './src');
const isDev = process.env.NODE_ENV !== 'production';
const publicPath = process.env.PUBLIC_PATH || '/';
const apiUrl = process.env.API_URL || 'https://rvosdevsvcs02.rvos.com/apirvos/api/';

module.exports = {
  context: jsCwd,
  entry: './index.js',
  mode: isDev ? 'development' : 'production',
  stats: {
    warnings: false,
    children: false
  },
  output: {
    path: path.join(process.cwd(), 'public/dest'),
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    publicPath: publicPath + 'dest/',
  },
  devtool: isDev ? 'inline-source-map' : 'hidden',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [ 'node_modules' ],
    extensions: [ '.js' ],
    alias: {
      'app': jsCwd
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/index.html',
      filename: '../index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(publicPath),
      'process.env.API_URL': JSON.stringify(apiUrl)
    })
  ],
  optimization: {
    moduleIds: 'hashed',
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true
  }
};

if (isDev) {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  module.exports.optimization.minimizer = [
    new TerserPlugin({
      terserOptions: {
        beautify: false,
        compress: {
          drop_console: false
        },
        comments: false,
        keep_fnames: false
      }
    })
  ];
}