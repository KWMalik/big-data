if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'library'], function(util, Library) {
	function Food() {

	}
	util.inherits(Food, Library);
	Food.id = "com.pool-storage.library.food";

	return Food;
});