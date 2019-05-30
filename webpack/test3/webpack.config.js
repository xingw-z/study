const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin({
            /**
             * 应该是 这个插件 会默认 是output 里的 path
             * 但是这个属性会把默认值代替
             */
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist/*')]
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}