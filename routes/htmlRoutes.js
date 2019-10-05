// import models
const Article = require("../models/article");
//import scrapper
const scrape = require("../scrape/scrape");

module.exports = function (app) {
    app.get("/", function (req, res) {
        Article.find({}).sort({ time: -1 }).limit(5).exec((err, data) => {
            if (err) throw err;
            console.log(data);
            res.render("index", { article: data });
        })
    })
    app.get("/article/:id", function (req, res) {
        const id = req.params.id;
        Article.findById(id, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.render("article", data);
        })
    })
    // app.get("/reddit", async function (req, res) {
    //     const url = "https://old.reddit.com/"
    //     const data = await scrape(url);
    //     res.render("reddit", { post: data })
    // })
}