
var
	Backend = require('./backend'),
	Presto = require('com.izaakschroeder.presto'),
	app = Presto.createServer(),
	io = require('socket.io').listen(app);


//console.log(require('../core/system'));

var backend = new Backend();
backend.registerPluginPath(__dirname+'/../plugins');

var iosys = io.of('/system');

backend.on('plugin.added', function(plugin) {
	iosys.emit('plugin.added');
	backend.activatePlugin(plugin);
	console.log(plugin)
}).on('plugin.removed', function(plugin) {
	
}).on('plugin.activated', function(plugin) {
	iosys.emit('plugin.activated');
}).on('plugin.deactivated', function(plugin) {
	plugins[plugin.id].unref();
})

app.require('static-content', __dirname + '/public');
app.require('static-content', { path: __dirname + '/../lib', prefix: '/scripts' });

app.listen(9999)
