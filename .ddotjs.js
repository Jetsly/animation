const autoprefixer= require('autoprefixer')
const join = require('path').join
const assetsPath = (...relativePath) => join(__dirname, ...relativePath)

module.exports = {
  entry: {
    app: ['./src/entry.ts'],
    vendor: ['./src/vendor.ts']
  },
  output: {
    path: 'docs',
  },
  resolve:{
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
  externals : {
    dragonBones: 'dragonBones'
  },
  rules: [{
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules|vue\/src/,
    options: {
      appendTsSuffixTo: [/\.vue$/],
    }
  }],
  postcss:[
    autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0', 'iOS >= 7.0']
    })
  ]
}
