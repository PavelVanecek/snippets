console.log(a) // ?
console.log(b) // ?
console.log(c) // ?
console.log(d) // ?
console.log(e) // ?

setTimeout(function() {
  a()
  setTimeout(a)
})

setInterval(a, 100)

var start = Date.now() // ms

function a() {
  console.log("elapsed", Date.now() - start)
  // do animation
}

var b = function() {}

var c = function d () {
  // d
}

var result = localStorage.getItem( /* this takes 300+ ms */ )

localStorage.getItem("myKey", function(result) {})
