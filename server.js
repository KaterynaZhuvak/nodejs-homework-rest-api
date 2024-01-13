const app = require("./app");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("connect");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
