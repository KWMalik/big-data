
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util'], function(util) {

	function UnimplementedError() {
		Error.call(this, 'The function you are trying to call is not implemented.');
	}
	util.inherits(UnimplementedError, Error)

	return UnimplementedError;
}