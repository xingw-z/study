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
		usedExports: true
	},
}

module.exports = meger(commonConfig, devConfig);