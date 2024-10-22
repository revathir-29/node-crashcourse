const express = require('express');
const morgan = require ('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes =require('./routes/blogRoutes');

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
app.use(express.urlencoded({extended : true}));

app.use(morgan('dev'));
app.use(morgan('tiny'));

//routes
app.get('/' , (req, res) => {
    res.redirect('/blogs');

    res.render('index' , {title : "Home" , blogs});
});

app.get('/about' , (req, res) => {
    res.render('about', {title : "About"});
});

//blog routes
app.use('/blogs' , blogRoutes);

//404 pages
app.use((req , res) => {
    res.status(404).render('404' , {title : "404"});
})