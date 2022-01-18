const express = require('express')
const app = express()
const port = 3000

// route, function
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/dog', function(req, res) {
    res.send('woof')
})

app.get('/cat', function(req, res) {
    res.send('meow')
})

app.get('/dog/:numberOfTimes', function(req, res) {
    let numTimes = req.params.numberOfTimes
    let buildString = ""
    for (let i = 0; i < numTimes; i++) {
        buildString += "woof "
    }
    res.send(buildString)
})

// main application method
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// exercise

// zoo with cat, dog, pig
// /cat/4 -> 4 meows
// /dog/10 -> 10 woofs
// /pig/50 -> 50 oinks
// /zebra/2 -> zebra does not exist in the zoo

// no numerical arg
app.get('/:animal/:number', function(req, res) {
    let animal = req.params.animal
    let number = req.params.number

    switch (animal) {
        case 'dog':
            res.send('woof')
            break
        case 'cat':
            res.send('meow')
            break
        case 'pig':
            res.send('oink')
            break
        default:
            res.send(animal + " does not exist in the zoo")
    }
})

// with numerical arg
app.get('/:animal/:number', function(req, res) {
    let animal = req.params.animal
    let number = req.params.number

    switch (animal) {
        case 'dog':
            res.send('woof')
            break
        case 'cat':
            res.send('meow')
            break
        case 'pig':
            res.send('oink')
            break
        default:
            res.send(animal + " does not exist in the zoo")
    }
})