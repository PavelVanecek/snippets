// Usage: require("app").listen(8080)

var express = require("express")
var app = express()
var myfile = require("./myfile")
// var myfile = fs.readFileSync("./myfile", "utf8")

app.get("/route1", function(req, res, next) {
  var myfile = fs.readFileSync("./myfile") // 200ms
  res.send(myfile)
})

app.get("/route2", function(req, res, next) {
  var result = fs.readFile("./myfile", function(myfile) { // 200ms
    res.send(myfile)
  })
})

module.exports = app

// $ curl localhost:8080/routeX
