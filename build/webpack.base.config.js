const path = require('path')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: path.resolve(__dirname, '../examples/main.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/web'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      // eslint
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, '../examples')],
        options: {
          formatter: eslintFriendlyFormatter,
          emitWarning: true,
        },
      },
      // vue
      {
        test: /\.vue$/,
        use: [{
          loader: 'thread-loader',
        }, {
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false,
            },
          },
        }],
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../examples')],
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader',{
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, '../tsconfig.json'),
            happyPackMode: true
          }
        }],
      },
      // img res
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', 'img/[name].[hash:7].[ext]'),
        },
      },
      // media res
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', 'media/[name].[hash:7].[ext]'),
        },
      },
      // font res
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]'),
        },
      }
    ],
  },
  resolve: {
    extensions: ['.ts','.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../examples'),
      'kbone-api': path.resolve(__dirname, '../src/index.ts')
    },
  },
  node: {
    // 避免 webpack 注入不必要的 setImmediate polyfill 因为 Vue 已经将其包含在内
    setImmediate: false,
  },
}
