
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['library', 'util'], function(Library, util) {

	function Movies() {

	}
	util.inherits(Movies, Library);
	Movies.id = "com.pool-storage.library.movies";

	return Movies;

})