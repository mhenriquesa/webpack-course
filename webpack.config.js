const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
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