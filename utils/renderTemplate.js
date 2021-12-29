const path = require("path")

module.exports = (req, res, template, data = {}) => {
	const currentDir = path.resolve(`${process.cwd()}`);
	const templateDir = path.resolve(currentDir.split("/")[file.split("/").length - 1] + path.sep + "templates")

	const baseData = {
		bot: client,
		path: req.path,
		user: req.isAuthenticated() ? req.user : null
	};

	res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
};