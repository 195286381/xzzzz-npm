var assert = require('assert');
var tools = require('../index.js');
var compose = tools.compose;


var middleware_1 = next => data => {
	data = data + 1;
	return next(data);
}


var middleware_2 = next => data => {
	data = data + 2
	console.log('middleware_2');
	return next(data);
}


var middleware_3 = next => data => {
	data = data + 3
	console.log('middleware_3');
	return next(data);

}

var handleData = data => {
	console.log('data: ' + data);
	return data;
}

var finalFunc = compose([middleware_1, middleware_2, middleware_3])(handleData)

var ret = finalFunc(1)
console.log('data', ret)

assert.equal(ret, 2, 'your input is not equal')