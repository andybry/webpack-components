module.exports = {

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      { 
        test: /\.styl$/, 
        loader: "style-loader!css-loader!stylus-loader" 
      },
      { 
        test: /\.json$/, 
        loader: "json-loader" 
      }
    ]
  },

  context: __dirname + "/",
  entry: "./webpack.manifest.js",

  output: {
    filename: "client.js",
    publicPath: "/",
    path: __dirname + "/"
  }

}