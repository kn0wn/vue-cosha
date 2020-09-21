const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "demo.min.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 8080,
    hot: true,
    open: true,
    overlay: true,
  },
};
