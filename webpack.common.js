const path = require('path')


module.exports = {
    entry: {
      main: "./src/index.js",
      vendor: "./src/Vendor.js"
    },
    module: {
        rules: [
          {
            test: /\.(html)$/,
            use: ['html-loader']
          },
          {
            test: /\.(svg|png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name:'[name].[hash].[ext]',
                  outputPath: 'imgs',
                  esModule: false
              }
              }]
          }
        ],
      },
}

