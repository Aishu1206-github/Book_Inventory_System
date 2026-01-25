import React, {useEffect, useState} from 'react';
import { getBooks, deleteBook } from '../services/api';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };
  const handleDelete = async (id) => {
    await deleteBook(id); 
    loadBooks();
  }

  return (
    <div className="page-container">
     <div className="card">  
      <div className='card-header'>
      <h2> 📚 Book Inventory</h2>
      <button onClick={() => navigate('/add')} className="add-btn"> + Add Book</button>
      </div>

      <div className='table-wrapper'>
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Overview</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {books.length === 0 ? (
                <tr><td colSpan="4" className="no-data">No Books Available</td></tr>
              ) : 
              (books.map(book => (
                <tr key={book.id}>
                  <td className="clickable" onClick={() => navigate(`/book/${book.id}`)}>{book.title}</td>
                  <td>{book.author}</td>
                  <td className='overview'>{book.overview}</td>
                  <td>
                    <button onClick={() => navigate(`/edit/${book.id}`)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(book.id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))
              )}
          </tbody>
        </table>
       </div> 
      </div>
    </div>
  );
}

export default BookList