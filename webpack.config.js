const path = require('path');

module.exports = {
  entry: './widget.js',
  output: {
    filename: 'widget.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Box',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                'regenerator': true
              }],
              ['@babel/plugin-proposal-object-rest-spread']
            ]
          }
        }
      },
      {
      test: /\.less$/,
      use: [
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: "[local]___[hash:base64:5]"
          }
        },
        {
          loader: "less-loader"
        }
      ]
    }
    ]
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};