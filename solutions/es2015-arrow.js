
// Third task
// - Will it work?
// - What would you change? To work?
// - What could you say about tests


// System
class Greeter {
  constructor(name) {
    this.name = name
  }

  sayHiEventually(callback) {
    setTimeout(() => {                      // Wrong scope - function / arrow function
      callback('Hi ' + this.name)
    }, 1000)
  }
}



// Test
const assert = require('assert');

describe('Greeter', () => {
  it('Should say Hi', (done) => {           // Asynchronous test
    const greeter = new Greeter('Jack')

    greeter.sayHiEventually((greeting) => {
      assert.equal(greeting, 'Hi Jack')
      done()
    })
  })
})

// run "./node_modules/.bin/mocha  snippets/es2015-arrow.js"
