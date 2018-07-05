const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.join(__dirname, '..', '..', 'src/modules/App');

module.exports = {
  entry: `${APP_DIR}/component.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [ new HtmlWebpackPlugin() ],
};
