const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		index: path.resolve(__dirname, 'src', 'index.ts'),
		popup: path.resolve(__dirname, 'src', 'popup.ts'),
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx'],
		alias: {
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat', // Must be below test-utils
			'react/jsx-runtime': 'preact/jsx-runtime',
		},
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: ['babel-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: '.', to: '.', context: 'public' }],
		}),
	],
}
