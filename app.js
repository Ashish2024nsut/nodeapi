const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyparser = require('body-parser');
const expressvalidator = require('express-validator');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//connecting to the database
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("database connection successful")}).catch(err=>{
    console.log(`database connection failed : ${err.message}`);
})

//bring in routes
// const {getPosts} = require('./routes/post');
const student = require('./routes/student');
const home = require('./routes/home');
const post = require('./routes/post');
// const myownmiddleware=(req,res,next)=>{
//     console.log("custom mddleware applied!!");
//     next();
// }


// middleware
app.use(bodyparser());
app.use(expressvalidator());
app.use(morgan('dev'));
app.use('/post',post);
app.use('/student',student);
app.use('/',home);

// app.get('/',getPosts);

//connecting the application
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server started on port :${PORT}`);
})