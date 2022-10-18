const app = require("./app");
// console.log(app.z());

const arr = [43, 45, 45, 34, 3, 57, 34];
// console.log(arr[1]);
let res = arr.filter((i) => {
  return i > 8;
});

console.log(res);
