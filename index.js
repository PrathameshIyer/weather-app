const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 4000;
// public static path
const static_path = path.join(__dirname, "public");
// console.log(static_path);

// const temp_path = path.join(__dirname, "./templates/views");(if u want to change folder instead of views)

app.set("view engine", "ejs");
// app.set("views", temp_path);(for changing view folder)

app.use(express.static(static_path));

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("*", (req, res) => {
  res.render("404err");
});

app.listen(port);
