// importing models
const Article = require("../models/article");
//importing scraper
const scrape = require("../scrape/scrape");

module.exports = function (app) {
    app.get("/api/articles", function (req, res) {
        Article.find({}, (err, data) => {
            console.log(data);
            res.json(data);
        })
    })
    app.get("/api/scrape/", async function (req, res) {
        const url = "https://old.reddit.com/";
        const data = await scrape(url);
        console.log(data);
        res.json(data);
    })
    app.get("/api/scrape/add", async function (req, res) {
        console.log("client connected")
        const url = "https://old.reddit.com/";
        const data = await scrape(url);
        console.log(data);
        data.forEach(post => {
            Article.findOneAndUpdate({
                title: post.title
            }, {
                title: post.title,
                url: post.url,
                sub: post.sub,
                time: post.time
            }, {
                new: true, upsert: true
            }, (err) => {
                if (err) throw err;
            })
        })
        res.send("update complete");
        console.log("update complete");
    })
}