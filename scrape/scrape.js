const cheerio = require("cheerio");
const request = require("superagent");

module.exports = async function (url) {
    const data = await request.get(url)
    const $ = cheerio.load(data.body);

    const results = [];

    $("div.cd__content").each((i, element) => {
        const headline = $(element).children(".cd__headline-text").text;
        const link = $(element).children("a").attr("href");

        results.push({
            headline,
            link,
        })

    })
    return results;
}