const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyrightWebpackPlugin = require('./plugins/copyrignt-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'test.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js/,
                use: [
                    {
                        loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
                        options: {
                            name: 'xxx'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'ddddd'
        }),
        new copyrightWebpackPlugin
    ]
}