// forEach()
// function callback once for each element
const numbers = [45, 4, 9, 16, 25];
let txt = "";


function myFunction_forEach(value, index, array) {
    txt += value + "<br>";
}
console.log("for each");
console.log("numbers: " + numbers);
console.log("txt before: " + txt);
numbers.forEach(myFunction_forEach);
console.log("txt after: " + txt);
console.log();

// map()
// creates a new array by performing a function on each array element
// does not execute the function for array elements without values
// does not change the original array
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction_map);

function myFunction_map(value, index, array) {
    return value * 2;
}
console.log("map");
console.log("numbers1: " + numbers1);
console.log("numbers2: " + numbers2);
console.log()

// filter()
// creates a new array with array elements that passes a test
console.log("filter");
const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction_filter);

function myFunction_filter(value, index, array) {
    return value > 18;
}
console.log("numbers3: " + numbers3);
console.log("over18: " + over18);
console.log()

// reduce()
// runs a function on each array element to produce (reduce it to) a single value
// does not reduce the original array
const numbers4 = [45, 4, 9, 16, 25];
let sum = numbers4.reduce(myFunction_reduce);

function myFunction_reduce(initial, value, index, array) {
    return initial + value;
}
console.log("reduce");
console.log("numbers4: " + numbers4);
console.log("sum: " + sum);
console.log();

// reduceRight()
// same as reduce, but works in the opposite direction

// every()
// checks if all all array values pass a test
const numbers5 = [45, 4, 9, 16, 25];
let allOver18 = numbers5.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log("every");
console.log("numbers5: " + numbers5);
console.log("allOver18: " + allOver18);
console.log();

// some()
// checks if some array values pass a test
let someOver18 = numbers5.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log("some");
console.log("numbers5: " + numbers5);
console.log("someOver18: " + someOver18);
console.log();

// indexOf(value) performs as expected
// so does lastIndexOf(value)

// find()
// returns the value of the first array element that passes a test function
const numbers6 = [4, 9, 16, 25, 29];
let first = numbers6.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log("find");
console.log("numbers6: " + numbers6);
console.log("first: " + first);
console.log();

// findIndex() performs as expected

// from()
// returns an Array object from any object with a length property or any iterable object
console.log("from")
console.log("array from alphabet: " + Array.from("ABCDEFG"));

// keys()
// returns an Array Iterator object with the keys of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
var text2 = "";

for (let x of keys) {
    text2 += x + "<br>";
}
console.log("keys");
console.log("fruits: " + fruits);
console.log("keys: " + keys);
console.log("text2: " + text2)

// includes(item) performs as expected