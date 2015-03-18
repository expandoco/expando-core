if (typeof module === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		module.exports = factory(require, exports, module);
	};
}
define(function(require, exports, module) {
	var parser = require('./parser');
	var generator = require('./generator');
	
	function transform(input){
		var tree = parser.parse(input);
		var result = generator.generate(tree);
		return {
			header: {
				generator: tree.generator
			},
			body: result
		};
	}
	return {
		transform: transform
	}

});
