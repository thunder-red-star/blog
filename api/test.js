

module.exports = {
	get: function (req, res) {
		return res.send("I got this request!")
	},
	post: function (req, res) {
		return res.send("How are you POSTing here without a form submission!")
	}
}