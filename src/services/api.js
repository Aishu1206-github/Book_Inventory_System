import axios from "axios";

const URL = "https://book-inventory-backend-805x.onrender.com/books";
// Read - All books
export const getBooks = () => axios.get(URL);
// Reas - single book by id
export const getBook = (id) => axios.get(`${URL}/${id}`);
// create - add new book
export const addBook = (book) => axios.post(URL, book);
// update - update book by id
export const updateBook = (id, book) => axios.put(`${URL}/${id}`, book);
// delete - delete book by id
export const deleteBook =(id) => axios.delete(`${URL}/${id}`);

