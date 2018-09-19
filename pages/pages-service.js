var Important = require("./Important");
var when = require('when');

function PagesService() {
	var self = this;

	self.getimportant = function(){

        var deferred = when.defer();

		Important.find({})
		.sort({importance: 'asc'})
		.exec(function(err, pages) {
			deferred.resolve(pages);
		});

		return deferred.promise;
	};
}

module.exports = new PagesService();
