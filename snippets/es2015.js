
// First task

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

const sayHelloToAll = function(firstName, ...names) {

  console.log(`Welcome first brave volunteer ${firstName}`)

  for (const name of names) {
    console.log(name)
  }

}
