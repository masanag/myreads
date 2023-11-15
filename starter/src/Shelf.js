import Book from "./Book";
import PropTypes from 'prop-types';
const Shelf = ({ shelf, books, updateBookShelf }) => {
    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((book) => {
                                return(
                                    <li key={book.id}>
                                        <Book
                                            book = {book}
                                            updateBookShelf = {updateBookShelf}
                                        />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

Shelf.propTypes = {
    shelf: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string),
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string,
        }),
    })).isRequired,
    updateBookShelf: PropTypes.func.isRequired,
};
export default Shelf;