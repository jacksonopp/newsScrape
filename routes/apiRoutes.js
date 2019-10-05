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
}