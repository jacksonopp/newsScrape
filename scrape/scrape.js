const cheerio = require("cheerio");
const axios = require("axios");

module.exports = async function (url) {
    const response = await axios.get(url)
    var $ = cheerio.load(response.data);
    var results = [];

    $("div.thing").each(function (i, element) {
        const title = $(element).find("a.title").text();
        const url = $(element).find("a.title").attr('href');
        const sub = $(element).find("a.subreddit").text();
        const time = $(element).find("time").attr("datetime");

        results.push({
            title,
            url,
            sub,
            time
        })
    })
    // console.log(results);
    return results;
}