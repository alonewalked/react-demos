var webpack = require('webpack');
module.exports = {
  entry: {
    "main": ['./client/main.js','webpack/hot/dev-server','webpack-dev-server/client?http://localhost:3301']
  },
  output: {
    path: __dirname+'/public/build',
    filename: "[name].js",
    publicPath: "http://localhost:3301/public/"
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}