module.exports = {
  entry: './src/js/app.js',
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js'
  },
  watch: false,
  mode: "development", //ta opcja zostanie pominięta jeżeli użyjemy npm run build
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}