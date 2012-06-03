(function($){
	$(function() {

		var splitters = Array.prototype.slice.call(document.querySelectorAll(".Splitter"));
		splitters.forEach(function(item) {
			var orientation, prev;

			if (prev = item.getAttribute("rel"))
				prev = document.querySelector(prev)
			else
				prev  = item.previousElementSibling

			console.log(item.parentNode.style.display)

			if (item.classList.contains("Horizontal"))
				orientation = 'horizontal';
			else if (item.classList.contains("Vertical"))
				orientation = 'vertical';
			else if (item.parentNode.style.display === "-webkit-box")
				orientation = item.parentNode.style.webkitBoxOrient;
			else
				//throw new Error("Splitter must have an orientation!")
				orientation = "vertical";

			item.setAttribute("draggable", "true")
			

			if (orientation === 'vertical') {
				item.classList.add("Vertical");

				item.addEventListener("drag", function( ev ) {
					var l = parseInt(item.dataset._lastY);

					if (l === ev.pageY || ev.screenY === 0)
						return;
					
					item.dataset._lastY = ev.pageY;

					var h = parseInt(prev.dataset._fakeheight) + ev.pageY - l;
					prev.dataset._fakeheight = h;
					if (h < 10) 
						$(prev).hide()
					else if (!$(prev).is(":visible") && h > 10) 
						$(prev).show();
					$(prev).height(h)
				}, true);

				item.addEventListener("dragstart", function(ev) {
					item.dataset._lastY = ev.pageY;
					prev.dataset._fakeheight = $(prev).height();
				}, true);
			}
			/*else
				$(this).addClass("Horizontal").bind("drag", function( ev ){
					var l = $(this).data("_lastX");
					if (l == ev.pageX || ev.screenX == 0)
						return;
					$(this).data("_lastX", ev.pageX);
					var w = prev.data("_fakewidth")+ ev.pageX - l;
					prev.data("_fakewidth", w);
					if (w < 10) 
						prev.hide();
					else if (!prev.is(":visible") && w > 10) 
						prev.show();
					prev.width(w)
					console.log(w)
				}).bind("dragstart", function(ev) {
					$(this).data("_lastX", ev.pageX)
					prev.data("_fakewidth", prev.width());
					ev.originalEvent.dataTransfer.effectAllowed = 'none';
				});*/
		})
	})

})(jQuery)