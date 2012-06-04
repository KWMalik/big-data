if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'library'], function(util, Library) {
	function Mail() {

	}
	util.inherits(Mail, Library);
	Mail.id = "com.pool-storage.library.mail";

	return Mail;
});