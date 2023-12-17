import React from 'react';

const BookList = ({ books, onRemoveBook }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <span>{book.title} by {book.author}</span>
          <button onClick={() => onRemoveBook(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
