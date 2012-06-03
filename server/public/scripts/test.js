requirejs.config({
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.7.2.min',
		'socket.io': '/socket.io/socket.io'
	}
});

require(['jquery', 'socket.io', 'util', 'system', 'splitter', 'selectable', 'collapsible'], function ($, xxx, util, system) {
	$(function() {

		var socket = io.connect('/');

		io.connect('/system').on('plugin.added', function() {
			console.log("PLUGIN ADDED")
		}).on('plugin.activated', function() {
			console.log("PLUGIN ACTIVATED")
		})

		console.log(system);

		


		

		function doSearch() {


			$.ajax({
				url: "http://10.0.1.195:9200/big-data/_search",
				/*contentType: 'application/json',*/
				type: "POST",
				dataType: "json",
				data: JSON.stringify({
					query: {
						match_all: { }
					},
					filter: {
						bool: {
							must: [
								{
									type: {
										value: "magic-cards"
									}
								},
								{
									prefix: {
										name: $("#Search input[type=search]").val()
									}
								}
							],
							must_not: [ ],
							should: [ ]
						}
					},
					from: 0,
					size: 20,
					sort: [ "id" ],
					facets: { }
				}),
				processData: false,
				success: function(data) {
					var cf = $(".Coverflow"), grid = $(".Grid tbody");
					cf.empty(); grid.empty();
					console.log(data)			
					data.hits.hits.forEach(function(result, i, list) {
						var obj = result._source;
						var item1 = $('<li data-id="'+obj.id+'" class="Item"><a href=""><img src="'+obj.icon+'" alt=""/></a></li>').appendTo(cf)
						var item2 = $('<tr draggable="true" data-id="'+obj.id+'" class="Item"><td>'+obj.name+'</td><td>'+obj.set+'</td><td>'+obj.type+'</td></tr>').appendTo(grid)
						
						item2.on('dragstart', function(e) {
							e.originalEvent.dataTransfer.effectAllowed = 'link';
							e.originalEvent.dataTransfer.setData('application/x-object-id', $(this).data('id'));
						})

						item2.on('dblclick', function() {
							var n = $(".Pane.Active");
							n.removeClass("Active");
							n.next(".Pane").next(".Pane").addClass("Active")
						})

						if (Math.floor(list.length / 2) === i) {
							item1.addClass("Selected");
							item2.addClass("Selected");
						}
					})
				}
			})
		}

		$(".Grid tbody").bind("keydown", function() {
			
		})

		$(".Coverflow").bind("keydown", function() {
			
		})

		$("#Collections a").on('dragenter', function() {
			$(this).addClass("DropTarget");
		}).on('dragleave', function() {
			$(this).removeClass("DropTarget");
		}).on('dragover', function(e) {
			e.preventDefault();
			return false;
		}).on('drop', function() {
			$(this).removeClass("DropTarget");
		})

		$("#Search input[type=search]").on("input", function() {
			doSearch()
		})

		doSearch()
	})

});

