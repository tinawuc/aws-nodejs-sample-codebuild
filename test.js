/*************Test******************/
var test = require('unit.js');
// var str = 'Hello, world!';
var str = 'Hi, world:';

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}
/***********************************/
