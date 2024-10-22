const Blog = require('../models/blog');
//blog_index , blog_details, blog_create_get, blog_create_post, blog_delete

//blog routes
const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index' , {title : 'All Blogs' , blogs : result})
    })
    .catch((err) => {
        console.log(err);
    })
}

//get req
const blog_details = (req, res) => {
    const id = req.params.id.trim();  // Trim any leading/trailing spaces
    
    // Validate that the ID is a valid ObjectId before querying the database
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid blog ID');
    }

    Blog.findById(id)
    .then(result => {
        if (result) {
            res.render('details', { blog: result, title: 'Blog Details' });
        } else {
            res.status(404).send('Blog not found');
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('Server error');
    });
}

//create
const blog_create_get = (req,res) => {
    res.render('create' , {title : "Create a new blog"});
}

//POST Req
const blog_create_post = (req,res) => {
     //console.log(req.body);
     const blog = new Blog(req.body);

     blog.save()
     .then((result)=> {
         res.redirect('/blogs');
     }).catch((err) => {
         console.log(err);
     })
}

//delete req
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            if (result) {
                // Blog found and deleted
                res.json({ redirect: '/blogs' });
            } else {
                // No blog found with this ID
                res.status(404).json({ error: 'Blog not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while deleting the blog' });
        });
}

//export all the controllers
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}
