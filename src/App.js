import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '' });
    }
  };

  const handleRemoveBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>Awesome Books</h1>
      <BookList books={books} onRemoveBook={handleRemoveBook} />
      <div className="add-book">
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button onClick={handleAddBook}>Add</button>
      </div>
    </div>
  );
}

export default App;
