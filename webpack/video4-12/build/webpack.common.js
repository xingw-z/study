const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');


const commonConfig = {
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
    plugins: [
	new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: 'video4-7'
	}), 
	new CleanWebpackPlugin(['dist'], {
		root: path.resolve(__dirname, '../')
	}),
	new webpack.ProvidePlugin({
		$: 'jquery',
		_join: ['lodash', 'join']
	})
	],
	optimization:{
		runtimeChunk: {
			name: 'runtime'
		},
		usedExports: true,
		splitChunks: {
			chunks: 'all',
			automaticNameDelimiter: '~',
			cacheGroups: {
				vendors: {
				  test: /[\\/]node_modules[\\/]/,
				  priority: -10,
				  name: 'vendors'
				},
			}
		}
	},
    output: {
		
		path: path.resolve(__dirname, '../dist')
	}
}

module.exports = (env) => {
	if (env && env.production) {
		return merge(commonConfig, prodConfig);
	} else {
		return merge(commonConfig, devConfig);
	}
}