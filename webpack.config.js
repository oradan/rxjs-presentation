const path = require('path');
const { mainModule } = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    devServer: {
        watchFiles:['src/**/*','index.html','book.html'],
        static: "./dist"
    },
    plugins: [
      new HtmlWebpackPlugin({template: './index.html'}),
      new CopyPlugin(
        {patterns:[{from:'./src/assets/images',to:'images'}]},
        {patterns:[{from:'./src/assets/html',to:'html'}]}       
        )
    ],
    module: {
        rules: [
          {
            test:  /\.(sass|scss|css)$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: () => [
                      require('autoprefixer')
                    ]
                  }
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
          {
            test:/\.(png|svg|jpg|jpeg|gif|PNG)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'images/[name][ext]'
            }
          },
          {
            test: /\html$/,
            use: 'html-loader'
          }
        ]
      }
}