import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {
  env
} from './utils.js'
import {
  styleLoaders,
  default as cssLoaders
} from './vue-loader.conf'
import {
  aliasObject
} from './utils'
export default {
  entry: {
    app: ['./src/entry.ts'],
    vendor: ['./src/vendor.ts']
  },
  output: {
    path: env.assetsPath('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  externals : {
    dragonBones: 'dragonBones'
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: aliasObject
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'app'],
      filename: `index.html`,
      template: `./src/index.pug`
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ],
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules|vue\/src/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.js$/,
        include: [env.assetsPath('src/assets/libs')],
        use: 'imports-loader?this=>window&define=>false'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        // css文件引用方式， 
        // 在js中引用使用require('!url-loader?limit=10000!../../assets/images/a1.png')
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]',
          publicPath: '../'
        }
      },
      {
        test: /\.(mp3|mp4)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'media/[name].[hash:7].[ext]',
          publicPath: './'
        }
      },
      {
        test: /\.(eot|woff|ttf|eot)$/,
        loader: 'file-loader',
        query: {
          name: 'fonts/[name].[hash:7].[ext]',
          publicPath: '../'
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ].concat(styleLoaders())
  }
}