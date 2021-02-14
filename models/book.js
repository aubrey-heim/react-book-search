const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: String,
  linke: String
});

const Book = mongoose.model("Book", Book);

module.exports = Book;
