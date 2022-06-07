const Post = require('../models/post');

exports.getPosts=(req,res)=>{
    const posts = Post.find().select("_id title body").then((result)=>{
        return res.status(200).json({data : result});
    }).catch(err=>{
        console.log(err); 
        return res.json({"message" : "error occured while bringing the data to you!"});
    });
}

exports.createPost=(req,res)=>{
    const post = new Post(req.body);
    console.log(req.body);
    post.save().then(result=>{
         res.status(200).json({
            post : result
        });
    });
}