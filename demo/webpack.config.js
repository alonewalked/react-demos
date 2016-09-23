var webpack = require('webpack');
module.exports = {
  entry: {
    "main": ['./app/main.js']/*,
    "index": ['./app/index.js']*/
  },
  output: {
    path: __dirname+'/build',
    filename: "[name].js"
  },
  module: {
    loaders: [
        { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: "style!css" }
    ],
    postLoaders: [
        { loader: "transform?brfs" }
    ]
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ]
  },
  plugins: [
  ]
}