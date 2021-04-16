const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/mytimer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', 
  },

  resolve: {
    extensions: ['.js'],
  },
  
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "myTimer.js"),
          to: "./mytimer.min.js"
        }
      ]
    }),
    new CleanWebpackPlugin(),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin() 
    ]
  },
}