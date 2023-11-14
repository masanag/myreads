import Book from "./Book";
const Shelf = ({ shelf, books }) => {
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
                                            title={book.title}
                                            authors={book.authors.join(', ')}
                                            imageUrl={book.imageLinks.thumbnail}
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

export default Shelf;