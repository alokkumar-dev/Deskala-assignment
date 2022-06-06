const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://alok:alok@cluster0.fmya8.mongodb.net/apna-e-mart?retryWrites=true&w=majority"
  );
};
