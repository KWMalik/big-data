
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(function() {
	function Library(id) {
		if (typeof id !== 'string')
			throw new TypeError();
		this.id = id;
	}

	/**
	 * Return all the types the library supports.
	 *
	 */
	Library.prototype.__defineGetter__('types', function() {
		return [ ]
	})

	Library.prototype.__defineGetter__('icon', function() {
		return undefined;
	})

	return Library;
})

