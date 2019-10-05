// importing models
const Article = require("../models/article");

module.exports = function (app) {
    app.get("/api/articles", function (req, res) {
        Article.find({}, (err, data) => {
            console.log(data);
            res.json(data);
        })
    })
}