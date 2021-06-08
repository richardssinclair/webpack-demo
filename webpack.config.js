const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry:  {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          title: 'Development',
        }),

    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.(sc|c)ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        //   Loading images
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ////   Loading fonts
        //   {
        //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
        //     type: 'asset/resource',
        //   },
        ////   Loading Data
        //   {
        //     test: /\.(csv|tsv)$/i,
        //     use: ['csv-loader'],
        //   },
        //   {
        //     test: /\.xml$/i,
        //     use: ['xml-loader'],
        //   },
        ],
      },
};