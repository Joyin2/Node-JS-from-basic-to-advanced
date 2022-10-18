const http = require("http");

function dataControl(req, res) {
  res.write("Hello brother");
  res.end();
}

http.createServer(dataControl).listen(4500);
