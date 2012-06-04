if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'library'], function(util, Library) {
	function TVShows() {

	}
	util.inherits(TVShows, Library);
	TVShows.id = "com.pool-storage.library.tvshows";

	return TVShows;
});