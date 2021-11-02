const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

// CONNECT TO MONGODB SERVER
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo DB Connected..."))
    .catch((e) => console.error(e));

module.exports = mongoose;
