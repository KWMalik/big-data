$(function() {
	$(".VisibilityModifier").on("click", function() {
		var target = $(this).data("target");

		if (target) {
			target = $(target);
		}
		else {
			var target = $(this);
			while (target.length > 0 && (!target.is("li"))) //selectable.parent()
				target = target.parent();
		}

		if (target.hasClass("Opened"))
			target.removeClass("Opened")
		else
			target.addClass("Opened")

		return false;
	})
})