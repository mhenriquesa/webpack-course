const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
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
            }
        ]

    }

})