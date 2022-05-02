var webpack = require('webpack')

module.exports = {

  output: {
    library: 'DulcetRouter',
    libraryTarget: 'umd'
  },

  externals: [
    {
      dulcet: {
        root: 'Dulcet',
        commonjs2: 'dulcet',
        commonjs: 'dulcet',
        amd: 'dulcet'
      }
    }
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },

  node: {
    Buffer: false
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]

}
