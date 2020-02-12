const fs = require('fs');

let templates = fs.readdirSync(__dirname + '/views/');

const nunjucksTemplates = templates.map ( (template) => {
	return {
		from: __dirname + `/views/${template}`,
		to: __dirname + `/../../docs/${template.replace("njk", "html")}`,
		writeToFileEmit: true
	}
});

module.exports = nunjucksTemplates;
