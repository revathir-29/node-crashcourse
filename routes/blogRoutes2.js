const express = require('express');
const mongoose = require('mongoose');
const blogController = require('../controllers/blogController')

const router = express.Router();

//blog routes
router.get('/' , blogController.blog_index);
//POST Req
router.post('/' , blogController.blog_create_post);
//create
router.get('/create' , blogController.blog_create_get);

//Route Parameters
//get req
router.get('/:id', blogController.blog_details);
//delete req
router.delete('/:id', blogController.blog_delete);

module.exports = router;