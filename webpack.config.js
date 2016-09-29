var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'helloWorld',
        template: './src/index.ejs' 
    })]
};
