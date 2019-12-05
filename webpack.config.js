const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist"),
    },
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