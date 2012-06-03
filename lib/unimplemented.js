function UnimplementedError() {
	Error.call(this, 'The function you are trying to call is not implemented.');
}
util.inherits(UnimplementedError, Error)

module.exports = UnimplementedError;