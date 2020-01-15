const path = require("path")
const ProgressBarPlugin = require("progress-bar-webpack-plugin")
const eslintFriendlyFormatter = require('eslint-friendly-formatter')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProd ? 'none' : 'cheap-module-eval-source-map',
  mode: isProd ? "production" : "development",
  entry: {
    index: path.join(process.cwd(), "src/index.ts"),
  },
  output: {
    path: path.resolve(process.cwd(), "./lib"),
    filename: "[name].js",
    library: "kbone-api",
    libraryTarget: "umd",
    umdNamedDefine: true,
    libraryExport:"default",
    globalObject: 'this'
  },
  module:{
    rules: [
        {
            test: /\.ts$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            options: {
              formatter: eslintFriendlyFormatter,
              emitWarning: true,
            },
          },
        {
          test: /\.(tsx?|babel|es6)$/,
          include: process.cwd(),
          exclude: /node_modules|utils\/popper\.js|utils\/date.\js/,
          loaders: ['babel-loader',{
              loader: 'ts-loader',
              options: isProd ? {
                configFile: path.resolve(__dirname, '../tsconfig.json'),
                happyPackMode: true
              } : {
                happyPackMode: true
              }
          }]
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: path.posix.join('static', '[name].[hash:7].[ext]')
          }
        }
      ]
  },
  resolve:{
    extensions:['.js', '.ts','.json'],
    modules: ['node_modules'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new FriendlyErrorsPlugin()
  ]
};
