
function Storage() {

}

/**
 *
 *
 */
Storage.prototype.__defineGetter__('configuration', function() {
	throw new UnimplementedError();
}) 

/**
 *
 *
 */
Storage.prototype.__defineSetter__('configuration', function(value) {
	throw new UnimplementedError();
})

module.exports = Storage;