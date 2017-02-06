
// First task
// - Will it work?
// - What would you change? To work and/or to be better?
// - Describe any syntax/language features you recognise from ES 2015
// - Write a code needed to call sayHelloAfterATime and output result to console so it shows 'Hello Tom'

class greeter {

  init(delay) {
    this.delay = delay
  }

  setName(name = 'No Name Provided') {
    this.name = name
  }

  sayHelloAfterATime() {

    return new Promise((resolve, reject) => {

      let greeting = 'Hello'

      setTimeout(function() {
        resolve(`${greeting} ${this.name}`)
      }, this.delay)
    })
  }

}





// Second task
// - Describe any syntax/language features you recognise from ES 2015
// - Write a code needed to call sayHelloToAll so that console shows:
// Welcome first brave volunteer Tom
// John
// Jack


const sayHelloToAll = function(firstName, ...names) {

  console.log(`Welcome first brave volunteer ${firstName}`)

  for (const name of names) {
    console.log(name)
  }

}
