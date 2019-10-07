// importing models
const db = require("../models/");
//importing scraper
const scrape = require("../scrape/scrape");

module.exports = function (app) {
    app.get("/api/articles", function (req, res) {
        db.Article.find({}, (err, data) => {
            res.json(data);
        })
    })
    app.get("/api/scrape/", async function (req, res) {
        const url = "https://old.reddit.com/r/news";
        const data = await scrape(url);
        res.json(data);
    })
    app.post("/api/comment/", function (req, res) {
        console.log(req.body);
        db.Comment.create(req.body)
            .then(function (dbComment) {
                return db.Article.findOneAndUpdate({ _id: req.body.id }, { $push: { comments: dbComment._id } }, { new: true });
            })
            .then(function (dbArticle) {
                res.json(dbArticle);
            })
            .catch(function (err) {
                res.send(err);
            })
    })
    app.get("/api/scrape/add", async function (req, res) {
        const url = "https://old.reddit.com/r/news";
        const data = await scrape(url);
        data.forEach(post => {
            db.Article.findOneAndUpdate({
                title: post.title
            }, {
                title: post.title,
                url: post.url,
                sub: post.sub,
                time: post.time,
                upvotes: post.upvotes
            }, {
                new: true, upsert: true
            }, (err) => {
                if (err) throw err;
            })
        })
        res.send("update complete");
    })
}