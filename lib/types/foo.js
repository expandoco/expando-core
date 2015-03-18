if (typeof module === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		module.exports = factory(require, exports, module);
	};
}
define(function () {
	function resolve(){

		return "FOOOOOOOOO!";
	}
	return {
		baseType: "string",
		resolve: resolve
	}
});
