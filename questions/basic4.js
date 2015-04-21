// Consider the following code:

// ----------
// BEGIN CODE
// ----------

var obj = {}
var prop = 'animal'
var animal = 'dog'

obj.prop = 'a'
obj[prop] = 'b'
obj.animal = 'c'

var result = obj[animal]

// ----------
// END CODE
// ----------

// what is the value of `result`?

module.exports = result
