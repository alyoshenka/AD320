// import express module
const express = require('express');
// create express application
// object can route requests, configure middleware, render views, register template engine, and modify application settings
const app = express();

const port = 3000;

// route definition
// invoked when ehere is a GET request with a path '/'
// takes request and response objects
// calls send on the response
app.get('/', function(req, res) {
    res.send('hello world')
});

// starts server on port
app.listen(port, function() {
    console.log('example app listening on port ${port}')
});