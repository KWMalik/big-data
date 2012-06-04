if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'library'], function(util, Library) {
	function Photos() {

	}
	util.inherits(Photos, Library);
	Photos.id = "com.pool-storage.library.photos";

	return Photos;
});