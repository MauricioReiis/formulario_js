const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const Webpack = require("webpack");

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin(), "..."],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      filename: "index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    port: 3000,
  },
};
