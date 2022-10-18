import webpack from 'webpack'

module.exports = {
  entry: "",
  output: {},
  devServer: {},
  devtool: debug ? "cheap-module-eval-source-map" : false,
  resolve: {},
  module: {
    rules: []
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      '$': 'jquery',
      '_': 'lodash',
      'ReactDOM': 'react-dom',
      'cssModule': 'react-css-modules',
      'Promise': 'bluebird'
    })

  ],
  optimization: {},
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    }
  },
};
