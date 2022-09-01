const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must enter author name"],
    trim: true,
  },
  age: Number,
});
const author = mongoose.model("authors", authorSchema);
module.exports = author;
