const fs = require('fs');

let templates = fs.readdirSync(__dirname + '/views/');

const menu = { items: ['uno', 'dos', 'tres']};

const context = { menu }

const nunjucksTemplates = templates.map ( (template) => {
	return {
		from: __dirname + `/views/${template}`,
		to: __dirname + `/../../docs/${template.replace("njk", "html")}`,
		context: context,
		// writeToFileEmit: true,
		// callback: function(err, res) { console.log(res) }
	}
});

module.exports = nunjucksTemplates;
