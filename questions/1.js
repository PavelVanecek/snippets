// Consider the following code:

// ----------
// BEGIN CODE
// ----------

function test() {
  var arr = []
  arr.push(a);
  arr.push(foo());

  var a = 1;
  function foo() {
    return 2;
  }

  return arr;
}
 
var result = test();

// ----------
// END CODE
// ----------

// what will be in the `result` array?
// Options:
// TODO

module.exports = result
