const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Merge webpack.common config with webpack.dev
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    runtimeChunk: false
  },
  plugins: [
    // Remove all files inside webpack's dist directory,
    // as well as all unused webpack assets after every successful rebuild.
    new CleanWebpackPlugin(),
    // Search for CSS assets during the Webpack build and will optimize/minimize the CSS.
    new OptimizeCssAssetsPlugin(),
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css"
    })
  ]
});
