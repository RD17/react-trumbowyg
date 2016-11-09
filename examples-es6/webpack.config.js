var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var publicPath = 'dist'
var cssName = 'styles.css'
var jsName = 'main.js'

var plugins = [
  // exposing jQuery for trumbowyg
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),

  new HtmlWebpackPlugin({
    template: './src/index.html',
    hash: false,
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  }),

   new ExtractTextPlugin(cssName)
]

module.exports = {
  entry: './src/main.js',
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, publicPath),
    filename: jsName
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: [/node_modules/, /public/]
      }
    ]
  }
}