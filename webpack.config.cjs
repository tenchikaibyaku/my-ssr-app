// webpack.config.jsの修正
const path = require('path');  // 'import' から 'require' へ変更
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist', 'server'),
  },
  module: {
    mode: 'development', // または 'production' と指定
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
