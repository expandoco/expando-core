if (typeof module === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		module.exports = factory(require, exports, module);
	};
}
define(function(){
	var generator = function(tree, configuration){
		var lt = "<",
		gt = ">",
		space = " ",
		slash = "/",
		root = "object";

		function resolveValue(typeName){
			var resolver = configuration.types[typeName];
			var value = typeName;
			if (resolver !== undefined) {
				value = resolver.resolve();
			}
			return value;
		}

		function openElement(name){
			return lt + name + gt;
		}

		function closeElement(name){
			return lt + slash + name + gt;
		}

		function generate(){
			var output;
			output = writeObject(tree.nodes, root);
			return output;
		}

		function needQuotes(type){
			return (type == "string" || type == "date");
		}

		function writeObject(nodes, name){
			var output = "";
			output += openElement(name);
			for (var i = 0; i <= nodes.length - 1; i++) {
				var node = nodes[i];

				if (node.baseType !== "object" && node.nodes === undefined && node.isArray !== true) {
					output += openElement(node.alias);
					output += resolveValue(node.type);
					output += closeElement(node.alias);
				}
				else{

					for (var a = 1; a <= node.count; a++) {

						if (node.baseType == "object") {
							output += writeObject(node.nodes,node.alias);
						}
						else{
							output += openElement(node.alias);
							output += resolveValue(node.type);
							output += closeElement(node.alias);
						}
					};
				}
			}
			output += closeElement(name);
			return output;
		}
		return {
			generate: generate
		};
	};
	return {
		generator: generator
	}
});
