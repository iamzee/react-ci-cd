const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sc|c)ss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|ttf|eot|svg|gif)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8000,
    historyApiFallback: true,
    publicPath: '/',
  },
  devtool: 'cheap-module-eval-source-map',
};
