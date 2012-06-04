requirejs.config({
	baseUrl: '/scripts',
	shim: {
		'socket.io': {
			exports: 'io'
		}
	},
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.7.2.min',
		'socket.io': '/socket.io/socket.io'
	}
});

requirejs(['jquery', 'client-backend', 'system', 'i18n!/locales/strings.js'], function ($, ClientBackend, System, strings) {

	//'splitter', 'selectable', 'collapsible'

	$("[data-locale]").each(function() {
		var key = $(this).data("locale");
		$(this).text(strings[key]);
	})

	var system = new System(new ClientBackend());

	system.on('plugin.added', function(plugin) {
		
	}).on('plugin.activated', function(plugin) {
		
	}).on('plugin.deactivated', function(plugin) {

	}).on('plugin.removed', function(plugin) {
		
	}).on('library.added', function(library) {
		console.log("Library added.")

		require(["i18n!/plugins/"+library.id+'/locales/strings.js'], function(strings) {
			$("#Libraries").append('<li data-library="'+library.id+'"><div><a data-library="'+library.id+'" class="Item WithIcon" href="">'+strings.title+'</a></div></li>')

		})


	}).on('library.removed', function(library) {

	}).on('view.added', function(view) {
		console.log("View added.");
	}).on('view.removed', function(view) {

	}).on('collection-type.added', function() {
		
		$("#CollectionTypes").append('<li><a href=""></a></li>');

	}).on('collection-type.removed', function() {

	}).on('collection.added', function() {

		$("#Collections").append('<li><div><a class="Item" href=""></a></div></li>')

	}).on('collection.removed', function() {

	})


});

