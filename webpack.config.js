const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
