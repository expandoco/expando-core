if (typeof module === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		module.exports = factory(require, exports, module);
	};
}
define(function (require) {
	var types = {
		string: require('./types/string'),
		int: require('./types/int'),
		float: require('./types/float'),
		date: require('./types/date'),
		bool: require('./types/bool'),
		age: require('./types/age'),
		company: require('./types/company'),
		email: require('./types/email'),
		fname: require('./types/fname'),
		lname: require('./types/lname'),
		tel: require('./types/tel')
	};

	var generators = {
		json: require('./generators/json'),
		xml: require('./generators/xml'),
		csv: require('./generators/csv'),
		sql: require('./generators/sql'),
	};
	return {

		types: types,
		generators: generators
	};

});
