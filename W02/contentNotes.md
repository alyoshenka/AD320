# Week 2 Content Notes

SSH into class server:

`ssh -i "yourprivatekey" studentad320winter2022@ec2-34-216-78-89.us-west-2.compute.amazonaws.com`

## JavaScript Exercises

[link](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_events1)

```js
// Declare three variable on one line:
var firstName = "John", lastName = "Doe", age = 35;

// variable types
let length = 16;          // Number
let lastName = "Johnson"; // String
const x = {
  firstName: "John",
  lastName: "Doe"
};                        // Object

// Make the function display "Hello" in the inner HTML of an element with the ID "demo".
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello";
}

// button on click
<button onclick="alert('Hello')">Click me.</button>

// The <div> element should turn red when someone moves the mouse over it.
<div onmouseover ="this.style.backgroundColor='red'">myDIV.</div>

// Create a Date object and alert the current date and time.
const d = new Date();
alert(d);

// Use the correct Date method to extract the year (four digits) out of a date object.
const d = new Date();
year = d.getFullYear();

// Use the correct Date method to set the year of a date object to 2020.
const d = new Date();
d.setFullYear(2020);

// Create a loop that runs through each item in the fruits array.
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

// Use the getElementById method to find the <p> element, and change its text to "Hello".
<p id="demo"></p>

<script>
    document.getElementById("demo").innerHTML = "Hello";
</script>

// Use the getElementsByTagName method to find the first <p> element, and change its text to "Hello".
<p id="demo"></p>

<script>
    document.getElementsByTagName("p")[0].innerHTML = "Hello";
</script>

// Change the text of the first element that has the class name "test".
<p class="test"></p>
<p class="test"></p>

<script>
    document.getElementsByClassName("test")[0].innerHTML = "Hello";
</script>

// Use HTML DOM to change the value of the image's src attribute.
<img id="image" src="smiley.gif"> </img> // need to close so text highlighting works

<script>
document.getElementById("image").src = "pic_mountain.jpg";
</script>

// Change the text color of the <p> element to "red".
<p id="demo"></p>

<script>
document.getElementById("demo").color = "red";
</script>

// Change the font size of the p element to 40 pixels.
<p id="demo"></p>

<script>
document.getElementById("demo").style.fontSize = "40px";
</script>

// Use the CSS display property to hide the p element.
<p id="demo"></p>

<script>
document.getElementById("demo").style.display = "none";
</script>

// Use the eventListener to assign an onclick event to the <button> element.
<button id="demo">Click me1</button>

<script>
document.getElementById("demo").addEventListener("click", myFunction);
</script>
```

## JavaScript ES6

- let -> declare variable with block scope
- const -> constant values
- arrow functions -> shorter syntax
    - `var x = function(x, y) { return x * y; }` = `const x = (x, y) => x * y;` 
    - do not have their own `this` -> bad for object methods
    - not hoisted -> defined before used
    - const safer than var, because functions expression is always constant
    - can only omit return and {} if single statement
        - `const x = (x, y) => { return x * y };`
- for/of -> loop over iterable objects
- maps
    ```js
    // Create Objects
    const apples = {name: 'Apples'};
    const bananas = {name: 'Bananas'};
    const oranges = {name: 'Oranges'};

    // Create a new Map
    const fruits = new Map();

    // Add new Elements to the Map
    fruits.set(apples, 500);
    fruits.set(bananas, 300);
    fruits.set(oranges, 200);
    ```
- sets -> distinct, no numerical index
- class -> NOT an object, but a template for objects
- promise
    - A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
    - "Producing Code" can take some time and "Consuming Code" must wait for the result.
        ```js
        // syntax
        const myPromise = new Promise(function(myResolve, myReject) {
        // "Producing Code" (May take some time)

            myResolve(); // when successful
            myReject();  // when error
        });

        // "Consuming Code" (Must wait for a fulfilled Promise).
        myPromise.then(
            function(value) { /* code if successful */ },
            function(error) { /* code if some error */ }
        );

        // usage
        const myPromise = new Promise(function(myResolve, myReject) {
            setTimeout(function() { myResolve("I love You !!"); }, 3000);
        });

        myPromise.then(function(value) {
            document.getElementById("demo").innerHTML = value;
        });
        ```
- symbol -> epresents a unique "hidden" identifier that no other code can accidentally access
    ```js
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    let id = Symbol('id');
    person[id] = 140353;
    // Now person[id] = 140353
    // but person.id is still undefined
    ```
- functions can have default parameters
- rest parameter `(...args)` -> indefinite number of args as array
- exponentiation operator `**`
- exponentiation assignment `**=`

## What is HTTP?

### Get vs Post

![Get vs. Post](get_vs_post.png)

## Node.js Introduction

uses asynchronous programming

"Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient."

### What can NodeJS do?

- generate dynamic page content
- create, open, read, write, delete, and close files on the server
- collect form data
- add, delete, modify data in your database

## Server Side Introduction

- efficient storage and delivery of information
- customized user experience
- controlled access to content
- store session/state information
- notifications and communication
- data analysis

allows you to tailor website contend for individual users

dynamic site -> HTML pages normally created by inserting data from a database into placeholders in HTML templates (more efficient)

supporting code -> runs on server, "server-side programming"/"back-end scripting"

client-side code -> HTML, CSS, JavaScript -> appearance and behavior of rendered page; handling different browsers

server-side code PHP, Python, Ruby, C#, NodeJS -> choosing which content is returned in response to requests; validating submitted data; interacting with databases; full access to server OS

web framework: collection of functions, objects, rules, and other code constructs designed to solve common problems, speed up development, and simplify different types of tasks

## Express

### Express/Node Introduction 

[link](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

#### Node Benefits

- great performance
- just JS
- new language, so well-designed for current applications
- npm is cool
- portable and well-supported
- active developer community

Use web frameworks for other common web-dev tasks

#### Introducing Express

most popular Node web framework

provides methods to specify what function is called for a particular HTTP verb and URL pattern, methods to specify what template engine is used, where template files are located, and what template to use to render a response

#### "Opinionated" web frameworks

- there is a "right way" to handle any particular task
- support rapid development in a particular domain
- less flexible solving problems in other domains

#### "Unopinionated" web frameworks

- fewer restrictions
- developers can use tools suitable for task, but more difficult to choose tools
- maybe "too many" choices

#### Modules

module -> library/file, imported with `require('package-name')`

can create your own

expose as additional properties using `exports` object to make available outside module

```js
// module file
exports.area = funciton(width) {return width * width; };
```
```js
// app file
const square = require('./square');
console.log('area: ' + square.area(4));
```
can also export complete objects

#### Asynchronous APIs

asynchronous API -> returns instantly

>Using non-blocking asynchronous APIs is even more important on Node than in the browser because Node is a single-threaded event-driven execution environment.

Callback functions used for when operation has completed

`res.json()` -> send a JSON response

`res.sendFile()` -> send a file

`app.all()` -> called in response to any HTTP method

#### Routers

[example](https://expressjs.com/en/starter/basic-routing.html)

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

group route handlers using `express.Router()`

`app.METHOD(PATH, HANDLER)`

- app -> instance of express.
- METHOD -> HTTP request method, in lowercase.
- PATH ->  path on the server.
- HANDLER -> function executed when the route is matched.

```js
// wiki.js - Wiki route module

const express = require('express');
const router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;
```
```js
// app.js

const wiki = require('./wiki.js');
// add the router to the middleware handline path
app.use('/wiki', wiki);
```

more stuff on routers [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

#### Middleware

[example](https://expressjs.com/en/guide/writing-middleware.html)

used extensitely in Express apps

route functions -> end request-response cycle by returning response to client

middleware -> performs operations then continues on with the stack

called in order declared

usually, middleware called before setting routes (otherwise route handlers can't access middleware functionality)

ONLY difference: middleware has `next()`

#### Handling errors

`(err, req, res, next)`

#### Using databases

first install database driver with npm

1. require driver
1. connect to database
1. perform CRUD operations

#### Rendering data (views)

template("view") engine: allow you to specify the structure of an output document in a template, using placeholders for data that will be filled in when a page is generated

### Setting up

Node/Express -> web app creates and runs its own web server

`package.json` -> manages dependencies; everything NPM needs to fetch and run application

#### Adding dependencies

```json
...
"licence": "ISC",
"dependencies": {
    "express": "^4.17.1"
},
"devDependencies":{
    "eslint": "^7.10.0"
}
...
```

#### Running tasks

can define named scripts in `package.json` and have NPM execute them

used to automate running tests or builds

For example, to define a script to run the eslint development dependency that we specified in the previous section we might add the following script block to our package.json file (assuming that our application source is in a folder /src/js):

```json
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```
We would then be able to run eslint using NPM by calling: 

```
npm run lint
```

`npm install` (from project dir) -> install all dependencies

## AJAX

**A**synchronous **J**avaScript **A**nd **X**ML

NOT a programming language

uses `XMLHttpRequest` and JavaScript/HTML DOM

use XML, JSON, or plain text

- read data from a server after page has loaded
- update page without reloading
- send data to server in the background

## Full Stack JS

browser

server

database

## JSON

same form as JS objects

`{}` -> objects

`[]` -> arrays
