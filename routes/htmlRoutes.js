// import models
const Article = require("../models/article");

module.exports = function (app) {
    app.get("/", function (req, res) {
        Article.find({}, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.render("index", { article: data });
        })
    })
    app.get("/:id", function (req, res) {
        const id = req.params.id;
        Article.findById(id, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.render("article", data);
        })
    })
}