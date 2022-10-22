const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

// >>>>>>>>>>> get method

// app.get("/", async (req, res) => {
//   let data = await dbConnect();
//   data = await data.find().toArray();

//   res.send(data);
// });
// console.log(req.body);

// >>>>>>>>>>> post method

// app.post("/", async (req, res) => {
//   let data = await dbConnect();
//   let result = await data.insert(req.body);
//   res.send(result);
// });

// >>>>>>>>>>> put method

// app.put("/", async (req, res) => {
//   let data = await dbConnect();
//   let result = data.updateOne({ name: "vivo 1820" }, { $set: req.body });

//   res.send({ result: "update" });
// });

// >>>>>>>>>>>  delete method

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id)
  });
  res.send(result);
});

app.listen(4200);
