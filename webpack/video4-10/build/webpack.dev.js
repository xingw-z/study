const meger = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
		hot: true,
		hotOnly: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		
	},
	module: {
		rules: [{
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
		}]
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	}
}

module.exports = meger(commonConfig, devConfig);