import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import BookShelves from "./BookShelves";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
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
      <Route exact path="/" element={<BookShelves books={books} />} />
      <Route exact path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
