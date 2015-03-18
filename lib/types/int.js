if (typeof module === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		module.exports = factory(require, exports, module);
	};
}
define(function () {
	function resolve(){
		var nr = Math.floor((Math.random() * 1000));
		return nr;
	}
	return {
		baseType: "int",
		resolve: resolve
	}
});
