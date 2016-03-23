
module.exports = {
  entry: [
	"./app/main.js",
  ],
  output: {
    path: __dirname+'/build',
    filename: "build.js"
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
    modulesDirectories: [
      'node_modules'
    ]
  }
}