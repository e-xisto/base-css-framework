const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const templatesHtmlPlugin = require("./src/docs/templates");

module.exports = {

	entry: {
		base: [
			'./src/js/base.ts',
			'./src/css/base.scss'
		]
	},

	output: {
		filename: 'js/base.js',
		path: path.resolve(__dirname, './dist')
	},

	devServer: {
		 index: 'docs/index.html',
		contentBase: [path.resolve(__dirname, './dist'),path.resolve(__dirname, './dist/docs')],
		compress: false,
		// writeToDisk: true,
		port: 8888
	},

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					MiniCssExtractPlugin.loader,
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},

			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},			

			{
				test: /\.(njk|nunjucks|html|tpl|tmpl)$/,
				use: [
					{
						loader: 'nunjucks-isomorphic-loader',
						query: {
							root: [path.resolve(__dirname, 'src/docs')]
						}
					}
				]
			},			

			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: {
					loader: "url-loader",
					options: {
						limit: 0,
						name: '[hash].[ext]',
						outputPath: 'css/assets/',
						publicPath: '/css/assets'
					}
				}
			},

			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 0,
						name: '[hash].[ext]',
						outputPath: 'css/assets/',
						publicPath: '/css/assets'
					}
				}
			}
		]
	},

	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "[id].css"
		}),
		new CopyPlugin([
			{ from: 'src/docs/images', to: 'docs/images' },
		])		

	// ],
	].concat(templatesHtmlPlugin),

	resolve: {
		extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
}