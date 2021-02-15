import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books/");
    // return axios.get("/api/books" + user_id);
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books/", bookData);
  },
  updateBook: function (id, bookData) {
    return axios.put("/api/books/" + id, bookData);
  },
  getGoogle: function (search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&apikey=" + process.env.REACT_APP_GOOGLE_API_KEY)
  }
};
