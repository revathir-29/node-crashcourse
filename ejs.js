const express = require('express');

//express app
const app = express();

//register view engines
app.set('view engine' , 'ejs');
app.set('views' , 'viewss');

//listen for requests
app.listen(3000);

app.get('/' , (req, res) => {
    const blogs = [
        {title : 'Yoshi finds eggs' , snippet : 'Lorem ipsum dolor sit amet consectetur'},
        {title : 'Mario finds stars' , snippet : 'Lorem ipsum dolor sit amet consectetur'},
        {title : 'How to defeat bowser' , snippet : 'Lorem ipsum dolor sit amet consectetur'},
    ];

    res.render('index' , {title : "Home" , blogs});
});
app.get('/about' , (req, res) => {
    res.render('about', {title : "About"});
});

app.get('/blogs/create' , (req, res) => {
    res.render('create' , {title : "Create a new blog"});

})

//404 pages
app.use((req , res) => {
    res.status(404).render('404' , {title : "404"});
})