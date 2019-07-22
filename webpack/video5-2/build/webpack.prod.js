const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
// const merge = require('webpack-merge');
// const commonConfig = require('./webpack.common');
console.log(WorkboxPlugin)
const prodConfig = {
	mode: 'production',
	// devtool: 'cheap-module-source-map',
	plugins: [
		new MiniCssExtractPlugin({
		  // Options similar to the same options in webpackOptions.output
		  // all options are optional
		  filename: '[name].css',
		  chunkFilename: '[id].[name].css',
		  ignoreOrder: false, // Enable to remove warnings about conflicting order
		}),
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		})
	],
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
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
				MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader'
			]
		}]
	},
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
	}
}

// module.exports = merge(commonConfig, prodConfig);
module.exports = prodConfig;