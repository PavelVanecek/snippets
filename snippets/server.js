// Usage: require("app").listen(8080)

'use strict'

/* eslint-env node */

const express = require('express')
const app = express()
const fs = require('fs')

app.get('/route1', (req, res) => {
  const myfile = fs.readFileSync('./myfile') // 200ms
  res.send(myfile)
})

app.get('/route2', (req, res) => {
  fs.readFile('./myfile', myfile => { // 200ms
    res.send(myfile)
  })
})

module.exports = app

// $ curl localhost:8080/routeX
