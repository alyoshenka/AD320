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

## AJAX



## Express

### Basic Routing