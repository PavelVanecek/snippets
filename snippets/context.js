/* eslint-env browser */

'use strict'

// Is "Library" a constructor? Why?
function Library(document) {
  this.document = document
}

// why .prototype? What would happen if it was not there?
Library.prototype.greet = function() {
  return `My document is ${this.document}`
}

// should I use new or not? What is the difference?
const a = new Library("O'Reilly")
// const b = Library('Jules Verne') // ?

a.greet() // "My document is O'Reilly"
// b.greet() // ?

function execute(f) {
  return f()
}

execute(a.greet) // "My document is [object HTMLDocument]", why?
