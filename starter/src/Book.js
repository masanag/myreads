import { useState } from "react";
const Book = ({ book, updateBookShelf }) => {
    const [shelf, setShelf] = useState(book.shelf);
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
                    backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    {/* TODO: OptionのDefaultと OptionのonChannge対応 */}
                    <select value={shelf} onChange={handleShelfChange}>
                        <option value="none" disabled>
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
                <div className="book-authors">{book.authors.join(',')}</div>
            </div>

    );
}

export default Book;