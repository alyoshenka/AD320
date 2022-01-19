var express = require('express')
var app = express()

// middleware function
var myLogger = function(req, res, next) {
    console.log('LOGGED')
        // call next function in stack
    next()
}

// load function -> "add" function to stack
app.use(myLogger)

var requestTime = function(req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

/*
If myLogger is loaded after the route to the root path, the
request never reaches it and the app doesn’t print “LOGGED”,
because the route handler of the root path terminates the  
request-response cycle.
*/

app.get('/', function(req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})

app.listen(3000)