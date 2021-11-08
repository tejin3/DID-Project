const mongoose = require("../config/mongo");
const { Schema } = mongoose;

const conditionSchema = new Schema({}, { timestamps: true, strict: false });
const conditionCollection = mongoose.model("conditions", conditionSchema);

module.exports = conditionCollection;
