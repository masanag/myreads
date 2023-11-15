import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from 'react';

const Search = ({ books, updateBookShelf }) => {
    const [searchWord, setSearchWord] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [searchError, setSearchError] = useState(false);
    useEffect(() => {
        const handleSearch = async() => {
            try {
                const result = await BooksAPI.search(searchWord);
                if (result.error) {
                    setSearchError(true);
                    setSearchResult([]);
                } else {
                    setSearchError(false);
                    const updatedResult = result.map((searchedBook) => {
                        const book = books.find(book => book.id === searchedBook.id)
                        return { ...searchedBook, shelf: book?.shelf || 'none' };
                    });
                    setSearchResult(updatedResult);
                }

            } catch (error) {
                console.error('Error searching books', error);
                setSearchError(true);
                setSearchResult([]);
            }
        }
        if(searchWord) {
            handleSearch();
        } else {
            setSearchResult([]);
            setSearchError(false);
        }
    }, [searchWord, books]);


    return (
        <div>
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/'></Link>
                        <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="search-books-results">
                        {searchError ? (
                            <div>Error: Unable to fetch search results.</div>
                        ) : (
                            Array.isArray(searchResult) && (<ol className="books-grid">
                                {searchResult.map((book) => {
                                    return(
                                    <li key={book.id}>
                                        <Book book={book} updateBookShelf={updateBookShelf}/>
                                    </li>
                                    );
                                })}

                            </ol>
                            )
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Search;