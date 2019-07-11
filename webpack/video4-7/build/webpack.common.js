const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
		// lodash: './src/lodash.js',
		main: './src/index.js'
    },
    module: {
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			} 
		}, {
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader', 
				'css-loader',
				'postcss-loader'
			]
		}, { 
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			// options: {
			// 	// 'presets': [['@babel/preset-env', {
			// 	// 	targets: {
			// 	// 		chrome: "67",
			// 	// 	},
			// 	// 	useBuiltIns: 'usage'
			// 	// }]]
			// 	"plugins": [["@babel/plugin-transform-runtime", {
			// 		"corejs": 2,
			// 		"helpers": true,
			// 		"regenerator": true,
			// 		"useESModules": false
			// 	}]]
			// }
		}]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: 'video4-7'
	}), 
	new CleanWebpackPlugin(['dist'], {
		root: path.resolve(__dirname, '../')
	})
	],
	optimization:{
		splitChunks: {
			chunks: 'all',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			automaticNameMaxLength: 30,
			name: true,
			cacheGroups: {
				www: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					// filename: '[name].js'
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
    output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
}