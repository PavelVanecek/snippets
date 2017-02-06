
// First task

class greeter {                               // Naming conventions. Classes

  init(delay) {                               // Introduce constructor (optional)
    this.delay = delay
  }

  setName(name = 'No Name Provided') {        // Default params
    this.name = name
  }

  sayHelloAfterATime() {

    return new Promise((resolve, reject) => { // ES2015 Promises

      let greeting = 'Hello'                  // Let/const. Const preferable

      setTimeout(function() {                 // Arrow functions, this scope. Will not work in ths case
        resolve(`${greeting} ${this.name}`)   // String literals
      }, this.delay)
    })
  }

}

/*
let app = new greeter(1000)
app.setName('test')
app.sayHelloAfterATime().then((greet) => console.log(greet))
*/



// Second task

const sayHelloToAll = function(firstName, ...names) {         // Spread operator

  console.log(`Welcome first brave volunteer ${firstName}`)

  for (const name of names) {                                 // For of vs forEach vs For in
    console.log(name)
  }

}

/*
sayHelloToAll('tom', 'jack', 'john')
*/
