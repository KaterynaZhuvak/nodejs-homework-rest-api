const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Kateryna:rTDKL6rHmRk1t8zY@cluster0.wrtkzla.mongodb.net/phone-book?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
