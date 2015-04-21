// Consider the following code:

// ----------
// BEGIN CODE
// ----------

var a = 1;

if (true) {
  var a = 2;
}

var fn = function() {
  var a = 3;
};

fn()

// ----------
// END CODE
// ----------

// what is the value of `a`?

module.exports = a
