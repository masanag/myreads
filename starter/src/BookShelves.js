import { useState } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
const BookShelves = ({ books, shelves }) => {
    return (
        <div className="list-books-content">
            <h2>BookShelves</h2>
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    { shelves.map((shelf) => {
                        const booksForShelf = books.filter(book => book.shelf === shelf.id)
                        console.log(booksForShelf);
                        return <Shelf key={shelf.id} shelf={shelf} books={booksForShelf} />
                    })}

                <div className="open-search">
                    <Link className="search-books" to="/search" />
                </div>
                </div>
            </div>
        </div>
    );
}

export default BookShelves;