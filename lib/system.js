
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'events', 'backend', 'library', 'view'], function(util, events, Backend, Library, View) {
	var EventEmitter = events.EventEmitter;
	
	function System(backend) {
		EventEmitter.call(this);

		if (backend instanceof Backend === false)
			throw new TypeError('Must give a valid backend!')
		this.backend = backend;
		this.plugins = [ ];
		this.libraries = [ ];
		this.stores = [ ];
		this.views = [ ]
		var self = this;
		this.backend.onAny(function() {
			self.emit.apply(self, arguments);
		})
		this.init();
	}
	util.inherits(System, EventEmitter);

	System.prototype.init = function() {
		var self = this;

		this.backend.on('plugin.added', function() {

		}).on('plugin.removed', function() {

		}).on('plugin.activated', function(plugin) {
			self.register(plugin.exports);
		}).on('plugin.deactivated', function() {
			
		})
	}

	System.superIncludes = function(object, ctr) {
		while (object && object !== ctr)
			object = object.super_;
		return object ? true : false;
	}

	System.prototype.register = function(object) {
		if (System.superIncludes(object, View)) {
			return this.registerView(object)
		}
		else if (System.superIncludes(object, Library)) {
			return this.registerLibrary(object);
		}
		else {
			console.log(object)
			throw new TypeError("Unknown type !")
		}
	}

	System.prototype.registerLibrary = function(library) {
		if (!System.superIncludes(library, Library))
			throw new TypeError('Must be a library!')

		if (!library.id)
			throw new Error("Library must have an id!");

		if (typeof this.libraries[library.id] !== "undefined")
			throw new Error("Library "+library.id+" already exists!");

		this.libraries[library.id] = library;
		this.libraries.push(library);

		this.emit("library.added", library);
	}

	System.prototype.registerView = function(view) {
		if (!System.superIncludes(view, View))
			throw new TypeError('Must be a view!');

		if (!view.id)
			throw new Error("View must have an id!");

		if (typeof this.views[view.id] !== "undefined")
			throw new Error("View "+view.id+" already exists!");

		this.views[view.id] = view;
		this.views.push(view);

		this.emit("view.added");
	}



	return System;
})




	