const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',  // 'production' に切り替え可能
  target: 'node',  // Node.js環境向けにバンドル
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: [nodeExternals()],  // node_modules をバンドルしない
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
