import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { join } from 'path'
import {
  styleLoaders,
  default as cssLoaders
} from './vue-loader.conf'
export const assetsPath = (...relativePath) => join(__dirname, '../', ...relativePath)
const isFontFile = url => /\.(woff2?|eot|ttf|otf)(\?.*)?$/.test(url)
export default {
  entry: {
    app: ['./src/entry.ts'],
    vendor: ['./src/vendor.ts']
  },
  output: {
    path: assetsPath('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  externals : {
    dragonBones: 'dragonBones'
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: Object.assign({}, {
      'src': assetsPath('src'),
      'assets': assetsPath('src/assets'),
      'actions': assetsPath('src/actions'),
      'components': assetsPath('src/components'),
      'units': assetsPath('src/units'),
      'stores': assetsPath('src/stores'),
      'routers': assetsPath('src/routers'),
      'directives': assetsPath('src/directives'),
      'mixins': assetsPath('src/mixins')
    })
  },
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
        include: [assetsPath('src/assets/libs')],
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
        test: /\.(woff2?|eot|ttf|otf|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:7].[ext]',
          outputPath: url => `${isFontFile(url) ? 'fonts' : 'media'}/${url}`,
          publicPath: url => `${isFontFile(url) ? '../' : './'}${url}`
        }
      },
    ].concat(styleLoaders())
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'app'],
      filename: `index.html`,
      template: assetsPath(`src/tpl.html`)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
}