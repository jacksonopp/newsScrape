const mongoose = require('mongoose');

const CommentSchema = require("./comment");
//article schema

const articleSchema = mongoose.Schema({
    headline: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    comments: [CommentSchema]
})

const Article = module.exports = mongoose.model("Article", articleSchema);