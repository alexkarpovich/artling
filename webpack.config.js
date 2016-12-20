var path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
      path: __dirname,
      filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  node: {
    module: "empty",
    net: "empty",
    fs: "empty"
  }
}
