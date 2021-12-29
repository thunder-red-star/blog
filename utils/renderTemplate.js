module.exports = (req, res, template, data = {}) => {
	// Default base data which passed to the ejs template by default. 
	const baseData = {
		bot: client,
		path: req.path,
		user: req.isAuthenticated() ? req.user : null
	};
	// We render template using the absolute path of the template and the merged default data with the additional data provided.
	res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
};