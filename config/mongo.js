const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("Connected to the database");
      } else {
        console.log("Error Connecting to the database");
      }
    }
  );
};

module.exports = dbConnect;
