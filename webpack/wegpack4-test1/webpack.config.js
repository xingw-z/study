const path = require('path')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production'
    return {
        entry: [
            "babel-polyfill",
            path.join(__dirname, './src/index.js')
        ],
        devServer: {
            port: 3000
        },
        module:{
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }]
                },
                {
                    test: /\.less$/,
                    use: [
                        devMode ? 'style-loader' : MinCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebPackPlugin({
                template: './public/index.html',
                filename: './index.html'
            }),
            new MinCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })
            
        ]
    }
}