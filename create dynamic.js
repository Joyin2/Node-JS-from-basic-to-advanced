const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (_, res) => {
  const user = {
    name: "Joyin",
    email: "joyinlaskar@gmail.com",
    city: "silchar",
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  //   const user = {
  //     name: "Joyin",
  //     email: "joyinlaskar@gmail.com",
  //     city: "silchar",
  //   };
  res.render("login");
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
