const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: String,
});
const book = mongoose.model("books", bookSchema);
module.exports = book;
