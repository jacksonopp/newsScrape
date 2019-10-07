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
    upvotes: {
        type: Number
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }
})

const Article = module.exports = mongoose.model("Article", articleSchema);