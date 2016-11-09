var webpack = require('webpack')
var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new CleanWebpackPlugin(['dist/'], {
    root: __dirname,
    verbose: true,
    dry: false
  }),
  new CopyWebpackPlugin([
    { from: path.join(__dirname, 'node_modules', 'trumbowyg', 'dist', 'ui', 'trumbowyg.css') },
    { from: path.join(__dirname, 'node_modules', 'trumbowyg', 'dist', 'ui', 'trumbowyg.min.css') }    
  ]),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin()
]


module.exports = {
  eslint: { configFile: '.eslintrc' },
  entry: './src/react-trumbowyg.js',
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  output: {
    library: 'react-trumbowyg',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'react-trumbowyg.js'
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      },
      {
        test: /\.(js|jsx)$/,
        loader: process.env.NODE_ENV !== 'production' ? 'babel!eslint-loader' : 'babel',
        exclude: [/node_modules/]
      }
    ]
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null
}