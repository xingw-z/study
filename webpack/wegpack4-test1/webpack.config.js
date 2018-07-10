const path = require('path')
module.exports = {
    entry: [
        "babel-polyfill",
        path.join(__dirname, './src/index.js')
    ],
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}