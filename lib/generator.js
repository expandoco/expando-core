if (typeof module === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		module.exports = factory(require, exports, module);
	};
}
define(function(require, exports, module) {
	var configuration = require('./configuration');

	function generate(tree){
		var scissrGenerator = configuration.generators[tree.generator];
		if (scissrGenerator === undefined) {
			var error = "generator '" + tree.generator + "' not registered!";

			throw {
				message: error
			}
		}
		var generator = new scissrGenerator.generator(tree, configuration);
		return generator.generate();
	}
	return {
		generate: generate
	}
});
