
$(function(){
	//Loader tweaks
	var mkLoader = function() { $(this).html('<div class="Bar1"/><div class="Bar2"/><div class="Bar3"/><div class="Bar4"/><div class="Bar5"/><div class="Bar6"/><div class="Bar7"/><div class="Bar8"/><div class="Bar9"/><div class="Bar10"/><div class="Bar11"/><div class="Bar12"/>'); }
	$(".Loader").live("create", mkLoader).each(mkLoader);
})