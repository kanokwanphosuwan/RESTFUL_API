var express = require('express');
var bodyPrser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;


var books = require('./analytic-trash-export');

app.get('/data', (req, res) =>
{
    res.send(books);
    
});



app.post('/data', (req, res)=>
{
    res.json(books);
});

//open port
app.listen(port, function()
{
    console.log("restful sever is running..")
});
