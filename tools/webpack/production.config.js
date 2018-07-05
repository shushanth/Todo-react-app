const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.join(__dirname, '..', '..', 'dist');
const APP_DIR = path.join(__dirname, '..', '..', 'src/modules/App');

module.exports = {
  entry: `${APP_DIR}/todoApp.js`,
  resolve: {
    extensions: ['.js'],
    alias: {
      'Components': path.resolve(__dirname, '../../src/modules/App/components/'),
      'Components/HOC': path.resolve(__dirname, '../../src/app/components/hoc/'),
      'Utils/helpers': path.resolve(__dirname, '../../src/app/utils/'),
    }
  },
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
