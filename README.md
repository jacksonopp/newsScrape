# newsScrape

###### Written in node.js by Jackson Oppenheim

https://news-scrape-jacksonopp.herokuapp.com/

---

### What is newsScrape?

newsScrape full stack web-app that scrapes the r/news subreddit using cheerio and updates a mongoDB database with the current trending news. It then displays a list of all stories with more than 100 upvotes in order of time posted. You can click a link to view and add comments to the story's page.

### NPM Dependencies

-  axios 0.19.0
-  body-parser 1.19.0
-  cheerio 1.0.0-rc.3
-  express 4.17.1
-  express-handlebars 3.1.0
-  mongoose 5.7.3
-  morgan 1.9.1
-  nodemon 1.19.3
-  superagent 5.1.0

### Database

The database is a mongoDB database that is accessed through an restful API using mongoose as an ORM.

### Organization

```
project
│   README.md
│   package.json
|   LICENSE - this is our MIT license
│   server.js - this our express server
│
└───config
    |   monoose.json - this contains our configuration for connecting to our mongoDB database

└───models
    |   index.js - allows the server to interact with the tables in our database
    |   article.js - this is the mongoose schema for our article documents
    |   comment.js - this is the mongoose schema for our comments

└───public
    └───css
    └───js
        |   scrapeAdd.js - this contains a single axios request that scrapes reddit and adds the articles to the database
        |   submitComment.js - this contains the logic for adding comments below the articles

└───routes
    │   apiRoutes.js - this contains all of the routing information for API requests
    │   htmlRoutes.js - this contains all of the routing information for HTML requests

└───scrape
    |   scrape.js - this contains the function that scrapes reddit and returns the results to later get added to the database

└───views
    │   index.handlebars - this contains the main page with all the articles
    |   article.handlebars - this contians the page for viewing articles and comments
    |   reddit.handlebars - this is a test page used for development
    └───layouts
        |   main.handlebars - this is the main handlebars layout page


```

#### License

This application is under the MIT licence.
