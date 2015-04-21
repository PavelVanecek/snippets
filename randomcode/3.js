// Variant A
var callback = console.log
$.get("/", callback) // Uncaught TypeError: Invalid invocation

// Variant B
$.get("/", function() {
  console.log(arguments)
}) // works

// why?
