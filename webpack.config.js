const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/mainModule.js",
    output: {
        path: path.join(__dirname,'/dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
           { 
               test: /\.js$/,
               exclude: /node-modules/,
               use: {
                   loader: "babel-loader"
               }
           }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}