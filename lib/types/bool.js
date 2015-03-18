if (typeof module === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		module.exports = factory(require, exports, module);
	};
}
define(function () {
	function resolve(){
		return !(Math.random()+.5|0);
	}
	return {
		baseType: "bool",
		resolve: resolve
	}
});
