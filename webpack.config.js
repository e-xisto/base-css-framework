const path = require('path');
const copydir = require('copy-dir');

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');

const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const marked = require('marked');

const nunjucksTemplates = require("./src/docs/templates");

// Configure Nunjucks Enviroment for Markdown Render tag
// https://github.com/zephraph/nunjucks-markdown
const env = nunjucks.configure({
	autoescape: false,
	noCache: true,
	trimBlocks: true,
	lstripBlocks: true
});

markdown.register(env, marked);

module.exports = {

	entry: {
		base: [
			'./src/js/base.ts',
			'./src/css/base.scss'
		]
	},

	output: {
		filename: 'js/base.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: "./"
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
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true, // set to true if you want JS source maps
				extractComments: false
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "[id].css"
		}),
		new NunjucksWebpackPlugin({
			templates: nunjucksTemplates,
			configure: env
		}),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: { baseDir: ['docs'] }
		}),
		new ExtraWatchWebpackPlugin({
			dirs: ['src']
		}),
		new EventHooksPlugin({
			'done': (compilation, done) => {
				copydir('dist/js', 'docs/js', {cover: false});
				copydir('dist/css', 'docs/css', {cover: true});
				copydir('src/docs/images', 'docs/images', {cover: false});
			}
		}),									
	],

	resolve: {
		extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
}