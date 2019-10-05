const mongoose = require('mongoose');

const CommentSchema = require("./comment");
//article schema

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    sub: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    comments: [CommentSchema]
})

const Article = module.exports = mongoose.model("Article", articleSchema);