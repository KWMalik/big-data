
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['events', 'util'], function(events, util) {

	var EventEmitter = events.EventEmitter;

	function Backend() {
		EventEmitter.call(this);
	}
	util.inherits(Backend, EventEmitter);

	return Backend;
});