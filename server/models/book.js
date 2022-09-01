const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must enter author name"],
    trim: true,
  },
  genre: String,
  authorId: {
    type: mongoose.Schema.ObjectId,
    ref: "authors",
    required: [true, "You must enter author name"],
    trim: true,
  },
});
const book = mongoose.model("books", bookSchema);
module.exports = book;
