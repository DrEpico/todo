const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "fs": false, // You can choose to set it to false if not needed
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve('buffer/'),
        "url": require.resolve('url/'),
        "vm": require.resolve('vm-browserify'),
        "zlib": require.resolve('browserify-zlib'),
      "assert": require.resolve("assert/"),
      "constants": require.resolve("constants-browserify"),
      "querystring": require.resolve("querystring-es3"),
      'child_process': require.resolve('child_process'),
      'tty': require.resolve('tty-browserify'),
      'workers': require.resolve('worker_threads')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.node$/,
        use: 'node-loader', // or 'file-loader' if you prefer
      },
      {
        test: /\.d\.ts$/, // Handle TypeScript definition files
        use: 'ignore-loader', // Ignore TypeScript definition files
      },
    ],
  },
};