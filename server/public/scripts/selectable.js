$(function() {
	$(".SelectableContainer .Item").live("click", function(evt) {
		var id = null, scope = null, node = $(this), selectable = $(this);
		

		//Find the container
		while (!(scope = node.data("selection-scope")) && (node = node.parent()) && node.length > 0);
		
		//Find all containers with the same scope
		$(".SelectableContainer[data-selection-scope="+scope+"]").each(function() {

			//Remove all selected nodes; perhaps better way of doing this?
			var type = $(this).data("selection-target") || "li";
			$(this).find(type).removeClass("Selected");

			//If the container is the one containing the item that's been clicked
			if ($(this).is(node)) {

				//Find the selection target from the clicked item
				while (selectable.length > 0 && (!selectable.is(type))) //selectable.parent()
					selectable = selectable.parent();
				
				selectable.addClass("Selected");

				id = selectable.data("id");
			}

		});

		if (id) {
			$(".SelectableContainer[data-selection-scope="+scope+"]").each(function() {
				var type = $(this).data("selection-target") || "li";
				$(this).find(type).filter(function() {
					return $(this).data("id") === id
				}).addClass("Selected");
			})
		}
		
		return false;
	})
})