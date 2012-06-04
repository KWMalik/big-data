
var
	Backend = require('./server-backend'),
	express = require('express'),
	app = express.createServer(),
	io = require('socket.io').listen(app);


//console.log(require('../core/system'));

var backend = new Backend();
backend.registerPluginPath(__dirname+'/../plugins');

//var iosys = io.of('/system');

io.sockets.on('connection', function() {
	console.log('connectedz')
})


io.of('/system').on('connection', function(socket) {
	socket.on('plugins', function() {
		console.log("PLOOGANS")
		for (var id in backend.plugins)
			socket.emit('plugin.added', backend.plugins[id]);
	})
})

backend.on('plugin.added', function(plugin) {
	//iosys.emit('plugin.added');
	backend.activatePlugin(plugin);
	console.log(plugin)
}).on('plugin.removed', function(plugin) {
	
}).on('plugin.activated', function(plugin) {
	//iosys.emit('plugin.activated');

	var path = require('path'), p = plugin.path + '/public';
	path.exists(p, function(exists) {
		if (exists)
			app.use('/plugins/'+plugin.id, express.static(p))
	})
	

}).on('plugin.deactivated', function(plugin) {
	plugins[plugin.id].unref();
})

app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/../lib'));

app.listen(9999)
