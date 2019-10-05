const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    body: {
        type: String
    },
    author: {
        type: String
    }
})

module.exports = CommentSchema;