const mongoose = require("mongoose");

const { DB_URL } = require("./PortUrlConfig");

mongoose
  .connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((r) => console.log("Successfully connected to database."))
  .catch((e) => console.log("Unable to connecte to database."));

module.exports = {
  mongoose,
};
