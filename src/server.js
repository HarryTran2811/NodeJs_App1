var express = require("express");
const path = require("path");
var app = express();
var morgan = require("morgan");
var expressLayouts = require("express-ejs-layouts");
const port = 3000;
// HTTP logger
app.set(morgan("combined"));
// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));

// Config static files
app.use(express.static(path.join(__dirname, "public")));
// use res.render to load up an ejs view file
app.use(expressLayouts);
// index page
app.get("/", function (req, res) {
  res.render("home", { title: "Home Page", layout: "./layouts/main" });
});

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
