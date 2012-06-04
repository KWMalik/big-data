if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'library'], function(util, Library) {
	function Calendar() {

	}
	util.inherits(Calendar, Library);
	Calendar.id = "com.pool-storage.library.calendar";

	return Calendar;
});