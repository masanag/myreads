import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import PropTypes from 'prop-types';
const BookShelves = ({ books, shelves, updateBookShelf }) => {
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
                        return <Shelf key={shelf.id} shelf={shelf} books={booksForShelf} updateBookShelf={updateBookShelf} />
                    })}

                <div className="open-search">
                    <Link className="search-books" to="/search" />
                </div>
                </div>
            </div>
        </div>
    );
}

BookShelves.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string),
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string,
        }),
    })).isRequired,
    shelves: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelves;