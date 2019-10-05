//imports
const express = require("express");
const exphbs = require("express-handlebars");
//setting up express
const app = express();
const PORT = process.env.PORT || 3000;

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
