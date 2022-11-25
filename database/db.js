const mongoose = require("mongoose");
const { connect } = require("../routes/routes");

const connectToDb = () => {
  mongoose.connect(
    process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Atlas Conectado"))
  .catch( (err) => console.log(err));
};

module.exports = connectToDb;