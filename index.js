const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "newFolder");

fs.readdir(dirPath, (err, files) => {
  console.log(files);
});




// for (i = 1; i < 11; i++) {
//   fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple text file");
// }