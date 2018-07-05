const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.join(__dirname, '..', '..', 'src/modules/App');

module.exports = {
  entry: `${APP_DIR}/todoApp.js`,
  resolve: {
    extensions: ['.js'],
    alias: {
      'Components': path.resolve(__dirname, '../../src/modules/App/components/'),
      'Components/HOC': path.resolve(__dirname, '../../src/modules/App/components/hoc/'),
      'Utils/helpers': path.resolve(__dirname, '../../src/modules/App/utils/'),
    }
  },
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
