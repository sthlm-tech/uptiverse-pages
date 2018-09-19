var App = require("ms-core");
var pages = require("./pages-service");
var baseUrl = "/pages";

module.exports = function() {

	App.Express.get( baseUrl + "/important", function (req, res) {
			pages.getimportant()
			.then(function(response) {
				res.send(response);
			});
	});
};
