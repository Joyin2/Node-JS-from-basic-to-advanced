const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.txt`;1

fs.unlinkSync(`${dirPath}/apple.txt`);
