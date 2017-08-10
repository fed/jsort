module.exports = {
  entry: './src/jsort.ts',
  output: {
    filename: 'lib/jsort.js',
    library: 'baconify',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    preLoaders: [
      // { test: /\.ts$/, loader: 'tslint' }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
