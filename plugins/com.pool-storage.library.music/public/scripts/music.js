if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'library'], function(util, Library) {
	
	function Music() {

	}
	util.inherits(Music, Library);
	Music.id = "com.pool-storage.library.music";

	return Music;
});