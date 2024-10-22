const express = require('express');

//express app
const app = express();

//listen for requests

app.listen(3000);

app.get('/' , (req, res) => {
    //res.send('<p> Home Page </p>');
    res.sendFile('./creatingAServer/views/index.html' , {root : __dirname});
});

app.get('/about' , (req, res) => {
    //res.send('<p> About Page </p>');
    res.sendFile('./creatingAServer/views/about.html' , {root : __dirname});
});

// app.get('/contact' , (req, res) => {
//     res.send('<h1> contact page </h1>');
// });

//redirects
app.get('/about-us' , (req , res)=> {
    res.redirect('/about');
})
//404 pages
app.use((req , res) => {
    res.status(404).sendFile('./creatingAServer/views/404.html' , {root : __dirname})
})