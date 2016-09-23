var webpack = require('webpack');
module.exports = {
  entry: {
    "main": ['webpack/hot/dev-server','./app/main.js']
  },
  output: {
    publicPath: "http://127.0.0.1:9090/build/",
    path: __dirname+'/build',
    filename: "[name].js"
  },
  module: {
    loaders: [
        { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: "style!css" }
    ]/*,
    postLoaders: [
        { loader: "transform?brfs" }
    ]*/
  },
  devtool: "source-map",
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}