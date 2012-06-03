
function View(id) {
	if (typeof id !== 'string')
		throw new TypeError();
	this.id = id;
}

/**
 * Checks to see whether or not the view can be used
 * against a certain type.
 */
View.prototype.isApplicableTo = function(type) {
	throw new UnimplementedError();
}

/**
 * Return a context which can be used to render blocks
 * of data.
 */
View.prototype.renderContext = function() {
	throw new UnimplementedError();	
}

module.exports = View;