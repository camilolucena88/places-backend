const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const assetDistPath = path.resolve(__dirname, '..') + '/places-backend/home/static';

module.exports = merge(common, {
  mode: "production",
  output: {
    // main output path in assets folder
    path: assetDistPath,
    // output path based on the entries' filename
    filename: '[name].[contentHash].js',
  },
});