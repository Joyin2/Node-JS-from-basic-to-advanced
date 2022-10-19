const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (_, res) => {
  res.render("profile");
});

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/pagenotfound.html`);
});
app.listen(4200);
