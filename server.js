//imports
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./config/mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan")
//setting up express
const app = express();
const PORT = process.env.PORT || 5000;
// ===================================== MONGO SETUP ===============================
//check connection
db.once("open", function () {
    console.log("connected to mongodb");
})

//check for db errors
db.on("error", function (err) {
    console.log(err);
})

//static
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//morgan
app.use(logger("dev"));

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function (err) {
    if (!err) console.log("Site is live on http://localhost:" + PORT);
    else console.log(err);
});
