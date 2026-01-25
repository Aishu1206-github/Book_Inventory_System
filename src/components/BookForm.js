BookForm.js


import React, { useState, useEffect } from "react";
import { addBook,getBook, updateBook } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/BookForm.css';

function BookForm() {
 
  const navigate = useNavigate();
  const{id} = useParams();
 const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    publishedDate: "",
    email: "",
    age: "",
    overview: ""
  });

  const [errors, setErrors] = useState({});
  
   const handleChange = (e) => {
    const { name, value } = e.target;

    setBook({
      ...book,
      [name]: value
    });
  };

  useEffect(() => {
    if (id) {
      getBook(id).then((response) => {
        setBook(response.data);
      }).catch((error) => {
        console.error("Error fetching book details:", error);
      }); 
    }
  }, [id]);

  const validate = () => {
    let temp = {};

    temp.title = book.title ? "" : "Title is required";
    temp.author = book.author ? "" : "Author is required";
    temp.email = /\S+@\S+\.\S+/.test(book.email) ? "" : "Invalid email";
    temp.age = !isNaN(book.age) ? "" : "Age must be a number";

    setErrors(temp);
    return Object.values(temp).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (id) {
      updateBook(id, book).then(() => navigate("/"));
    } else {
      addBook(book).then(() => navigate("/"));
    }
  };
  

  return (
   <div className="form-page">
      <div className="form-card">
        <h2>{id ? "Edit Book" : "Add Book"}</h2>

        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" value={book.title} onChange={handleChange} />
          <span>{errors.title}</span>

          <input name="author" placeholder="Author" value={book.author} onChange={handleChange} />
          <span>{errors.author}</span>

          <input name="email" placeholder="Email" value={book.email} onChange={handleChange} />
          <span>{errors.email}</span>

          <input name="age" placeholder="Age" value={book.age} onChange={handleChange} />
          <span>{errors.age}</span>

          <textarea name="overview" placeholder="Overview" value={book.overview} onChange={handleChange} />

          <button type="submit">
            {id ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
