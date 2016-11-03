import webpack from 'webpack';
import path from 'path';

const WebPackConfig = {
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
        loader: 'style-loader',
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'js'),
    filename: 'main.js',
  },
  plugins: [],
};

export default WebPackConfig;
