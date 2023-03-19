const Mongoose = require("mongoose");

const localDB = "mongodb+srv://matzjeurissen:57rrITI0cxyEi7Nj@cluster0.0ud6m7o.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
