const dbConnect = require("./mongodb");

const update = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "y21" },
    { $set: { name: " vivo Y21" } }
  );
  console.warn(result);
};
update();
