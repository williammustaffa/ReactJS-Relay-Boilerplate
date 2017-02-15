var path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'js', 'index.js'),
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'js'),
    filename: 'main.js',
  },
  plugins: [],
};

