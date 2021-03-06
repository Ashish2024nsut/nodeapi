const mongoose = require('mongoose');

const schema =  new mongoose.Schema({
    title: {
        type: String,
        required: "title is required",
        minlength : 4,
        maxlength :150
    },
    body : {
        type : String,
        required: "body is required",
        minlength :4,
        maxlength : 2000
    }
});

module.exports = mongoose.model('Post',schema);