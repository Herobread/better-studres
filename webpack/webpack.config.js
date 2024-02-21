const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, '..', 'src', 'index.ts'), // Assuming index.ts is the entry point that imports other TypeScript files
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'bundle.js', // Output bundle filename
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
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
