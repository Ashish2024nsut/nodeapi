const express = require("express");

const router = express.Router();

//imports
const {getPosts, createPost}  = require('../controllers/post');
const validator = require('../validator');




router.get('/',getPosts);
router.post('/details',validator.createPostValidator,createPost); 

module.exports = router;