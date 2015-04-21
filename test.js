/* This file reads all questions, their answers and runs that
 *, to see if the answers match
 */

var fs = require('fs')
var assert = require('assert')
var Mocha = require('mocha')
var path = require('path')

var FOLDER = {
  QUESTIONS: path.join(__dirname, 'questions'),
  ANSWERS: path.join(__dirname, 'answers')
}

// synchronous, because why not.
var questions = fs.readdirSync(FOLDER.QUESTIONS)
var answers = fs.readdirSync(FOLDER.ANSWERS)

var options = {}
var mocha = new Mocha(options)

// boot suite tests that tests are loaded correctly
var bootSuite = Mocha.Suite.create(mocha.suite, 'boot')

bootSuite.addTest(new Mocha.Test('should find questions', function() {
  assert.ok(Array.isArray(questions))
  assert.ok(questions.length)
}))

bootSuite.addTest(new Mocha.Test('should find answers', function() {
  assert.ok(Array.isArray(answers))
  assert.ok(answers.length)
}))

bootSuite.addTest(new Mocha.Test('should have one answer for every question', function() {
  for(var i = questions.length - 1; i >= 0; i--) {
    assert.ok(~answers.indexOf(questions[i]))
  }
}))

// previous test tests that for every question, there is an answer
// so it is safe to include all.
questions.forEach(function(fileName) {
  var questionResult = require(path.join(FOLDER.QUESTIONS, fileName))
  var answer = require(path.join(FOLDER.ANSWERS, fileName))

  var testDescription = 'question ' + path.basename(fileName, '.js')
  var suite = Mocha.Suite.create(mocha.suite, testDescription)

  suite.addTest(new Mocha.Test('should be answered', function() {
    assert.deepEqual(questionResult, answer)
  }))

})

mocha.run()
