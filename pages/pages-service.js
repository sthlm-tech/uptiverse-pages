var Information = require("./Information");
var when = require('when');

function PagesService() {
	var self = this;

	self.getinformation = function(){

        var deferred = when.defer();

		Information.find({})
		.sort({published: 'descending'})
		.exec(function(err, pages) {
			deferred.resolve(pages);
		});

		return deferred.promise;
	};
}

module.exports = new PagesService();
