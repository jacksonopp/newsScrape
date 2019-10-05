// import models
const Article = require("../models/article");

module.exports = function (app) {
    app.get("/", function (req, res) {
        Article.find({}, (err, data) => {
            res.json(data);
        })
    })
}