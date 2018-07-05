const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.join(__dirname, '..', '..', 'dist');
const APP_DIR = path.join(__dirname, '..', '..', 'src/modules/App');

module.exports = {
  entry: `${APP_DIR}/component.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  plugins: [ new HtmlWebpackPlugin() ],
};
