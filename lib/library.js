
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

})

Library.prototype.__defineGetter__('icon', function() {
	return this.manifest.icon;
})

module.exports = Library;