// import models
const db = require("../models");
//import scrapper
const scrape = require("../scrape/scrape");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Article.find({}).sort({ upvotes: - 1 }).limit(10).exec((err, data) => {
            if (err) throw err;
            // console.log(data);
            res.render("index", { article: data });
        })
    })
    app.get("/article/:id", function (req, res) {
        const id = req.params.id;
        db.Article.findById(id)
            .populate("comment")
            .then((data) => {
                res.json(data);
                console.log(data);
                // res.render("article", data);
            })
            .catch((err) => {
                res.send(err);
            })
    })
    // app.get("/reddit", async function (req, res) {
    //     const url = "https://old.reddit.com/"
    //     const data = await scrape(url);
    //     res.render("reddit", { post: data })
    // })
}