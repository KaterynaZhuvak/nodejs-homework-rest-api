const app = require("./app");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

// const { DB_HOST } = process.env;
const DB_HOST =
  "mongodb+srv://Kateryna:rTDKL6rHmRk1t8zY@cluster0.wrtkzla.mongodb.net/db-contacts?retryWrites=true&w=majority";

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
