import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import BookShelves from "./BookShelves";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  const shelves = [
    { id: 'currentlyReading', title: 'Currently Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read'}
  ];
  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      setBooks(response);
    }
    getBooks();

  }, []);

  const updateBookShelf = async(book, shelf) => {
    try {
      await BooksAPI.update(book, shelf);
      setBooks(prevBooks => {
        const newBooks = prevBooks.map(prevBook => {
          if (prevBook.id === book.id) {
            return { ...prevBook, shelf };
          }
          return prevBook;
        });
        return newBooks;
      });
    } catch (error) {
      console.error('Error updateing book shelf', error);
    }
  }

  return (
    <Routes>
      <Route exact path="/" element={<BookShelves books={books} shelves={shelves} updateBookShelf={updateBookShelf} />} />
      <Route exact path="/search" element={<Search books={books} updateBookShelf={updateBookShelf} />} />
    </Routes>
  );
}

export default App;
