
const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("In the middleware 1");
    res.send('<h1> On the Users page</h1>');
});

app.use( '/' , (req, res, next) => {

    console.log("In the Middleware 2");
    res.send('<h1>On default page</h1>');
});

app.listen(3000);