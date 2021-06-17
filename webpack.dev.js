const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");


const assetDistPath = path.resolve(__dirname, '..') + '/places-backend/home/static';

console.log(assetDistPath);

// module.exports = merge(common, {
//   mode: "development",
//   output: {
//     // main output path in assets folder
//     path: assetDistPath,
//     // output path based on the entries' filename
//     filename: '[name].js',
//   },
// });
