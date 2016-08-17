module.exports = {
  entry: './src/jsort.js',
  output: {
    path: './lib',
    filename: 'jsort.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  }
};
