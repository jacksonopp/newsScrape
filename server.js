//imports
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./config/mongoose");
//setting up express
const app = express();
const PORT = process.env.PORT || 3000;
// ===================================== MONGO SETUP ===============================
//import models
const Article = require("./models/article");
//check connection
db.once("open", function () {
    console.log("connected to mongodb");
})

//check for db errors
db.on("error", function (err) {
    console.log(err);
})

app.use(express.static("public"));
//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function (err) {
    if (!err) console.log("Site is live on http://localhost:" + PORT);
    else console.log(err);
});
