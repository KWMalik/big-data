
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'library'], function(util, Library) {
	function Books() {

	}
	util.inherits(Books, Library);
	Books.id = "com.pool-storage.library.books";

	return Books;
});