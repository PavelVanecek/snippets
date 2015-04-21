function Library (document) {

  this.document = document

  return {
    greet: function() {
      if (! this instanceof Library) {
        throw new Error("Invalid invocation")
      }
      return 'My document is ' + this.document;
    }
  }

}





var a = new Library("O'Reilly")
a.greet() // "My document is O'Reilly"

function execute(f) {
  f();
}

execute(a.greet); // "My document is [object HTMLDocument]"
