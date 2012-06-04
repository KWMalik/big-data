if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['util', 'library'], function(util, Library) {
	function MagicTheGathering() {

	}
	util.inherits(MagicTheGathering, Library);
	MagicTheGathering.id = "com.pool-storage.library.magic-the-gathering";

	return MagicTheGathering;
});