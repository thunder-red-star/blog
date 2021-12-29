const path = require("path");

module.exports = (req, res, template, data = {}) => {
	const currentDir = path.resolve(`${process.cwd()}`);
	const templateDir = path.resolve(currentDir + path.sep + "templates");

	const baseData = {
		path: req.path,
	};

	res.render(
		path.resolve(`/${templateDir}${path.sep}${template}`),
		Object.assign(baseData, data)
	);
};
