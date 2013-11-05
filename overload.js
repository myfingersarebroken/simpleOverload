/*!
 * simpleOverload v1.0
 * https://github.com/myfingersarebroken/simpleOverload
 *
 * Released under the MIT license
 *
 * Date: 2013-11-07
 */

/**
 * As JS don't supports data types, implements an overload method.
 *
 * @function _$overload
 * @author Fernando Faria - It's a snipet from https://github.com/myfingersarebroken/aer
 */
function _$overload(pointer, args, context) {
	var regex = /function\s+(\w+)s*/, types = [];
	
	for (var i = 0; i < args.length; i++) {
		types.push(regex.exec(args[i].constructor.toString())[1]);
	}
	
	return pointer[types.toString()].apply(context, args);
}

/**
 * The overload method.
 * to use, follow the example
 *
 * @example
 *		var MyOverloadedFunc = _$over({
 *			'' : function() {
 *				// ...
 *			}
 *			, 'String' : function(str) {
 *				// ...
 *			}
 *			, 'String,Number,String,RegExp' : function(str1, n, str2, regex) {
 *				// ...
 *			}
 *		});
 *
 * @overloaded
 * @function _$over
 * @author Fernando Faria - It's a snipet from https://github.com/myfingersarebroken/aer
 */
function _$over() {
	return _$overload(_$over, arguments, this);
}
/**
 * @overloaded _$over
 * @param o {Object} An object with properties as strings that rerperesents the expected datatype
 *					 and its value as functions with its arity equivalent to the number of types specified
 *					 in the property name. See an example in the @function _$over
 * @return {Function} A call to the signed function!!!
 * @author Fernando Faria - It's a snipet from https://github.com/myfingersarebroken/aer
 */
_$over['Object'] = function(o) {
	return function() {
		return _$overload(o, arguments, this);
	}
}
