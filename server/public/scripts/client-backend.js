
define(['util', 'backend', 'socket.io'], function(util, Backend, io) {
	
	function ClientBackend() {
		Backend.call(this);

		console.log(this)

		var self = this;
		this.io = io.connect('/system');
		

		this.io.emit('plugins');

		this.io.on('plugin.added', function(plugin) {
			console.log('Plugin '+plugin.id+' added.');
			self.emit('plugin.added', plugin);
			if (plugin.active)
				self.activatePlugin(plugin);			
		}).on('plugin.activated', function(plugin) {
			self.activatePlugin(plugin)

		}).on('plugin.deactivated', function(plugin) {
			self.emit('plugin.deactivated', plugin)
		}).on('plugin.removed', function(plugin) {
			self.emit('plugin.removed', plugin)
		})

	}
	util.inherits(ClientBackend, Backend);

	ClientBackend.prototype.activatePlugin = function(plugin) {

		if (!plugin.manifest.main.match(/^public\/?.*$/)) {
			console.log(plugin.id+" is server side only.?");
			return;
		}

		var 
			self = this,
			main = '/plugins/'+plugin.id+'/'+plugin.manifest.main.replace(/^public\/?/, '');

		(plugin.manifest.styles || [ ]).forEach(function(css) {
			var link = document.createElement("link");
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = '/plugins/'+plugin.id+'/styles/'+css;
			document.getElementsByTagName("head")[0].appendChild(link);
		})

		require([main], function(object) {
			console.log('Plugin '+plugin.id+' activated.');
			plugin.exports = object;
			self.emit('plugin.activated', plugin)
		})
	}

	ClientBackend.prototype.deactivatePlugin = function(plugin) {

	}


	return ClientBackend;
});