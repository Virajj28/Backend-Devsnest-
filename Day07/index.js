const express = require('express');
const app = express(); 

// Always keep in mind while writing Backend Code
// Security, Performance , Edge Cases, Bottom to top approach

//function definition

// const op = (req, res) => {
//     res.send('Hail for Nervebody!');
// };

// app.get('/', op);

app.get('/', (req, res) => {
    // res.send(['testing with array']);
    //db update
    //res.sendStatus(200); //201 means update successfully
    // res.json('Hail for Nervebody!'); //testing with string
    // res.send({with: 'object'}); //testing with object

    res.status(500).send('database not connecting!'); //pipelining- one function after function
});

app.get('/ab?cd', (req, res) => { //if nulify b in route
        res.send('abcd')
});

app.get('/ab+cd', (req, res) => { //if maximum times b in route
    res.send('abcd')
});

app.get('/ab*cd', (req, res) => { //if any random in between b & c in route
    res.send('abcd')
});

app.get('/ab{cd}?e', (req, res) => { //if cd is optional in route
    res.send('abcd')
});

app.get(/a/, (req, res) => { //if start with a in route  REGEX
    res.send('abcd')
});

app.get(/.*fly$/, (req, res) => { //if nulify b in route
    res.send('superb')
});

app.get('/flights/:id/attendants/:attendantsId', (req, res) => { //if any no. id in params route
    res.send(req.params.id);
    console.log(req.query);
});

app.listen(4000);