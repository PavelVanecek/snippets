// Consider the following code:

// ----------
// BEGIN CODE
// ----------

var result = 1

if (false == '0') {
  result = result + 2
}

if (false === '0') {
  result = result + 4
}

// ----------
// END CODE
// ----------

// what is the value of `result`?

module.exports = result
