const path = require('path');

module.exports = {
  mode: 'development',
  entry: '/app.js',
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    //contentBase: path.resolve(__dirname, '/dist'),//
    port: 3000,
  },
};
