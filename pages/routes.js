var App = require("ms-core");
var pages = require("./pages-service");
var baseUrl = "/pages";

module.exports = function() {

	App.Express.get( baseUrl + "/information", function (req, res) {
			pages.getinformation()
			.then(function(response) {
				res.send(response);
			});
	});
};
