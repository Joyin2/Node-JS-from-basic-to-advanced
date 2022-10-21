const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
    name: "max1",
    brand: "micromax",
    price: 13400,
    category: "mobile",
  },
  {
    name: "max 2",
    brand: "micromax",
    price: 17000,
    category: "mobile",
  },
  {
    name: "max 3",
    brand: "micromax",
    price: 19000,
    category: "mobile",
  }
  ]);
  if (result.acknowledged) {
    console.log("data inserted")
  }
};

insert();
