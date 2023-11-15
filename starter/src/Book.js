import { useState } from "react";
import PropTypes from 'prop-types';
const Book = ({ book, updateBookShelf }) => {
    const [shelf, setShelf] = useState(book.shelf || 'none');
    const handleShelfChange = (e) => {
        setShelf(e.target.value);
        updateBookShelf(book, e.target.value);
    };

    return (
            <div className="book">
                <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${book?.imageLinks?.thumbnail}")`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select value={shelf} onChange={handleShelfChange}>
                        <option disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors?.join(',')}</div>
            </div>

    );
}

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string),
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string,
        }),
    }).isRequired,
    updateBookShelf: PropTypes.func.isRequired,
};

export default Book;