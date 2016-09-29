var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
     {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015','react']
      }
    },           { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'helloWorld',
        template: './src/index.ejs' 
    })]
};
