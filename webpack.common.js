const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    plugins:[
        new HtmlWebpackPlugin({
            template: './indexTemplate.html',
        })
    ],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
                'style-loader', // Terceiro - Inject style into DOM
                'css-loader', // Segundo - CSS -> commonjs
                'sass-loader' // Primeiro - Sass -> CSS
            ],
          },
        ],
      },
}