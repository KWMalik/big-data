
(function (definition, undefined) {
	
	if (typeof define !== 'function' && typeof require === 'function') 
		define = require('amdefine')(module);

    if (typeof define === "function") {
        define(function (require, exports, module) {
            definition(require, exports, module);
        });
    } else if (typeof exports === "object") {
        definition(require, exports, module);
    } else {
        System = definition(undefined, {}, {});
    }

})(function (require, exports, module, undefined) {

	exports.inherits = function(ctor, superCtor) {
		ctor.super_ = superCtor;
		ctor.prototype = Object.create(superCtor.prototype, {
			constructor: {
				value: ctor,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	};

	module.exports = exports;
	return module.exports;

});
