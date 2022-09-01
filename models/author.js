const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const author = mongoose.model("authors", authorSchema);
module.exports = author;
