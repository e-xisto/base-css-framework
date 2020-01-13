const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");

let templates = fs.readdirSync(__dirname + '/views/');

console.log('Loaded Templates...')
console.log(templates)

const templatesHtmlPlugin = templates.map ( (template) => {
	return new HtmlWebpackPlugin({
		customData: { title: 'BASE CSS', lista: [ "guia.html", "sandbox.html", "..." ] },
		filename: __dirname + `/../../dist/docs/${template.replace("njk", "html")}`,
		template: __dirname + `/views/${template}`
	})
});

module.exports = templatesHtmlPlugin;
