
// First task
// - Will it work?
// - What would you change? To work and/or to be better?
// - Describe any syntax/language features you recognise from ES 2015
// - Write a code needed to call sayHelloAfterATime and output result to console so it shows 'Hello Tom'

class Greeter {                               // Naming conventions. Classes. Pascal case

  consrtuctor(delay) {                               // Introduce constructor (optional)
    this.delay = delay
  }

  setName(name = 'No Name Provided') {        // Default params
    this.name = name
  }

  sayHelloAfterATime() {

    return new Promise((resolve, reject) => { // ES2015 Promises

      const greeting = 'Hello'                  // Let/const. Const preferable

      setTimeout(() => {                 // Arrow functions, this scope. Will not work in ths case
        resolve(`${greeting} ${this.name}`)   // String literals
      }, this.delay)
    })
  }

}

/*
let app = new greeter(1000)
app.setName('Tom')
app.sayHelloAfterATime().then((greet) => console.log(greet))
*/



// Second task
// Second task
// - Describe any syntax/language features you recognise from ES 2015
// - Write a code needed to call sayHelloToAll so that console shows:
// Welcome first brave volunteer Tom
// Hi John
// Hi Jack

const sayHelloToAll = function(firstName, ...names) {         // Spread operator

  console.log(`Welcome first brave volunteer ${firstName}`)

  for (const name of names) {                                 // For of vs forEach vs For in
    console.log('Hi ' + name)
  }

}

/*
sayHelloToAll('Tom', 'Jack', 'John')
*/
