const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 8081;

module.exports = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port: port,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/index',
        './SimpleComponent': './src/SimpleComponent',
        './TimeNow': './src/TimeNow',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
