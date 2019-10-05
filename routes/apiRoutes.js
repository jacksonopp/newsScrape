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
        const url = "https://www.cnn.com/";
        const data = await scrape(url);
        res.send(data.body);
    })
}