const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	mode: 'development',
	devServer: {
		port: 4002
	},
	plugins: [
		new ModuleFederationPlugin({
				name: 'cart',
				filename: 'remoteEntryCart.js',
				exposes: {
						"./CartShow": './src/index',
				},
				shared: ['faker'],
		}),
		new HtmlWebpackPlugin({
				template: './public/index.html'
		})
	]
};
