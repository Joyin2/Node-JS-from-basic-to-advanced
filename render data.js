const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send(` <h1>Welcome bro , homePage</h1>
  <a href="/about"> go to about</a>
  `);
});
app.get("/about", (req, res) => {
  res.send(` <h1>Welcome bro , about page</h1>
  <input type="text" value="${req.query.name}" />
  <a href="/"> go back to home</a>
  `);
});
app.listen(4200);
