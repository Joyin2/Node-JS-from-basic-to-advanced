// Importing module
const chalk = require("chalk");
const validator = require("validator");
// Printing the text
console.log(chalk.red("aayush"));
console.log(chalk.red.underline("aayush"));
console.log(chalk.red.underline.bold("GFGndfhnbjdnfj"));

const res = validator.isEmail("joyinlaskar@gmail.ar");
console.log(res);
