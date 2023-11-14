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
    console.log('useEffect');
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      console.log(response);
      setBooks(response);
    }
    getBooks();

  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<BookShelves books={books} shelves={shelves} />} />
      <Route exact path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
