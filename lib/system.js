(function (definition, undefined) {

	//if (typeof define !== 'function' && typeof require === 'function')
	//	try {
	//		define = require('amdefine')(module);
	//	} catch (e) { }

	if (typeof define === "function") {
		define(function (require, exports, module) {
			definition(require, exports, module);
		});
	} else if (typeof exports === "object") {
		definition(require, exports, module);
	} else {
		System = definition(undefined, {}, {});
	}

})(function (require, exports, module, undefined) {

	var util = require('util'), EventEmitter = require('./events').EventEmitter;

	function System(backend) {
		this.backend = backend;
		this._plugins = { };
		this._libraries = { };
		this._stores = { }
	}
	//util.inherits(System, EventEmitter);

	System.prototype.init = function() {
		this.backend.on('plugin.added', function() {

		}).on('plugin.removed', function() {

		}).on('plugin.activated', function() {

		}).on('plugin.deactivated', function() {
			
		})
	}

	System.prototype.plugins = function(callback) {
		callback(this._plugins);
	}

	System.prototype.libraries = function(callback) {
		callback(this._libraries);
	}

	System.prototype.stores = function(callback) {
		callback(this._stores);
	}

	System.prototype.collections = function() {

	}

	System.prototype.types = function() {

	}

	System.prototype.views = function() {

	}

	module.exports = System;
	return module.exports;

});




	