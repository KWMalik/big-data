
var 
	directory = require('directory'),
	path = require('path'),
	EventEmitter = require('events').EventEmitter,
	util = require('util');

function Backend() {
	EventEmitter.call(this);
	var self = this;
	this.plugins = { };
	this.pluginPaths = directory.resolver();
	this.pluginPaths.discovery({ depth: 2, match: /^(.*)\/package.json$/ }).on("added", function(id, fullPath) {
		id = path.dirname(id);
		self.plugins[id] = { 
			id: id,
			path: path.dirname(fullPath)
		};
		self.emit("plugin.added", self.plugins[id]);
	}).on("removed", function(id, fullPath) {
		self.emit("plugin.removed", self.plugins[id])
	})
}
util.inherits(Backend, EventEmitter);

Backend.prototype.registerPluginPath = function(path) {
	this.pluginPaths.addSearchPath(path);
}

Backend.prototype.unregisterPluginPath = function(path) {
	this.pluginPaths.removeSearchPath(path);
}

Backend.prototype.activatePlugin = function(plugin) {
	if (plugin.id)
		plugin = this.plugins[plugin.id]
	else
		plugin = this.plugins[plugin];

	if (typeof plugin === "undefined")
		return false;

	if (plugin.active)
		return;

	require(plugin.path);

	plugin.active = true;
	this.emit("plugin.activated", plugin)
}

Backend.prototype.deactivatePlugin = function(plugin) {
	if (!plugin.active)
		return;
	plugin.active = false;
	this.emit("plugin.deactivated", plugin)
}


module.exports = Backend;