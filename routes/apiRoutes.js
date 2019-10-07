// importing models
const Article = require("../models/article");
//importing scraper
const scrape = require("../scrape/scrape");

module.exports = function (app) {
    app.get("/api/articles", function (req, res) {
        Article.find({}, (err, data) => {
            res.json(data);
        })
    })
    app.get("/api/scrape/", async function (req, res) {
        const url = "https://old.reddit.com/r/news";
        const data = await scrape(url);
        res.json(data);
    })
    app.put("/api/scrape/add", function (req, res) {
        console.log(req.body.comment); // should see stuff
        Article.findOneAndUpdate({
            _id: req.body.id
        }, {
            $push: { comments: req.body.comment }
        })
        res.send("connected");
    })
    app.get("/api/scrape/add", async function (req, res) {
        const url = "https://old.reddit.com/r/news";
        const data = await scrape(url);
        data.forEach(post => {
            Article.findOneAndUpdate({
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