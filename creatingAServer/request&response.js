/*
const http = require('http');
const server = http.createServer((req , res) => {
    console.log('Request made');
    //console.log(req);
    console.log(req.method , req.url);

    res.setHeader('Content-Type' , 'text/html');

    res.write('Hello, This is Node.js');
    res.write('<head><link rel = "stylesheet href = "#"></head>');
    res.write('<p>Hello , Welcome to Node js</p>');
    res.write('<p>Hello, Welcome back to Node js</p>');
    res.end();
});

server.listen(3000, 'localhost' , () => {
    console.log('Listening for request on port 3000');
});
*/

const http = require('http');
const fs = require('fs');
const server = http.createServer((req , res) => {
    console.log('Request made');
    //console.log(req);
    console.log(req.method , req.url);
    //set header content type
    res.setHeader('Content-Type' , 'text/html');

    //send an html file
    fs.readFile('./views/index.html' , (err , data) => {
        if(err) {
            console.log(err);
            res.end();
        } else{
            // res.write(data);
            // res.end();
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost' , () => {
    console.log('Listening for request on port 3000');
});