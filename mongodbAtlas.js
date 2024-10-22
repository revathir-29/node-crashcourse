const express = require('express');
const morgan = require ('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://nodejs-course:test1234@nodecourse.scm7n.mongodb.net/nodecourse?retryWrites=true&w=majority&appName=NodeCourse';

mongoose.connect(dbURI)
// {useNewUrlParser : true , useUnifiedTopology : true} --> While running any deprecated msg was come means use this as a second arg
    .then((result)=> app.listen(3000))
    .catch((err) => console.log(err));


//register view engines
app.set('view engine' , 'ejs');
app.set('views' , 'viewss');

//listen for requests
//app.listen(3000);

//middlwware & static files
app.use(express.static('public'));

app.use(morgan('dev'));
app.use(morgan('tiny'));

//mongoose and mongo sandbox routes
app.get('/add-blog' , (req, res) => {
    const blog = new Blog({
        title : 'new blog2',
        snippet : 'about my new blog',
        body : 'more about my new blog'
    });
    blog.save()
    .then((result)=> {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})

//retrive all the blogs
app.get('/all-blogs' , (req,res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});
//retrive a single blog
app.get('/single-blog' , (req,res) => {
    Blog.findById('66ec08e0d905dd91de0081e6')
    .then((result)=> {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

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