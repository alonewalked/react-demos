var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var proxy = require('proxy-middleware');
var url = require('url');

module.exports = function(app) {
  // 使用3301端口
  app.use('/build', proxy(url.parse('http://localhost:3301/build')));

  var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: '/build/',
    stats: { colors: true }
  }).listen(3301, 'localhost', function() {
    console.log('socketio listen 3301')
  });
}