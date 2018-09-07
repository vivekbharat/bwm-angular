const express = require("express");
const mongoose = require("mongoose");

const config = require("./config/dev");
const Rental = require("./models/rental");
const Fakedb = require("./fake-db");

const rentalRoutes = require("./routes/rental");

mongoose
  .connect(
    config.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("DB Connected");
    const fakedb = new Fakedb();
    fakedb.seeDb();
  })
  .catch(e => {
    console.log(`Unable to connect ${e}`);
  });

const app = express();

app.use("/api/v1/rental", rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server is Running");
});
