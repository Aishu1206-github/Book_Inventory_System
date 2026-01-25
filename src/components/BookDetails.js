import React, {useEffect, useState} from 'react';
import { getBook } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/BookDetails.css';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook(id).then((response) => 
      setBook(response.data))
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  },[id]);

  if(!book)
  {
    return <p className='loading'> Loading book details...</p>;
  }

  return (
    <div className='details-page'>
    <div className='details-card'>
      <button className='back-btn' onClick={()=> navigate("/")}>   ← Back to List </button> 
      <h2 className='book-title'>{book.title}</h2>
      <p className='author'> <b> Author : </b> by {book.author}</p>
      <div className='details-grid'>
        <div> 
        <span> Publisher </span>
        <p> {book.publisher}</p>
        </div>
        <div>
          <span> Published Date </span>
          <p>{book.publishedDate}</p>
        </div>
        <div>
          <span> Email </span>
          <p> {book.email}</p>
        </div>
        <div>
          <span> Age Group </span>
          <p> {book.age}</p>
        </div>
      </div>

      <div className='overview-section'>
        <h4> Overview </h4>
        <p>{book.overview}</p>
      </div>

    </div>
    </div>
  );
}

export default BookDetails