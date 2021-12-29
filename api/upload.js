const renderTemplate = require('../utils/renderTemplate.js')

module.exports = {
	get: function (req, res) {
		return renderTemplate(req, res, 'upload.ejs')
	},
	post: function (req, res) {
		const form = formidable({ multiples: true });

		form.parse(req, (err, fields, files) => {
			if (err) {
				res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
				res.end(String(err));
				return;
			}
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ fields, files }, null, 2));
		});

		return;
	}
}