var webpack = require('webpack');
const path = require('path');
const sourcePath = path.join(__dirname, './app');

module.exports = {
  entry: {
    "main": './main.js'
  },
  output: {
    publicPath: "/",
    path: __dirname+'/build',
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
        { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ] },
        { test: /\.css$/, loader: ["style-loader", "css-loader"] }
    ]
  },
  devtool: "source-map",
  context: sourcePath,
  resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './app',
      historyApiFallback: true,
      port: 9090,
      inline: true,
      hot: true,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      }
    }
}
