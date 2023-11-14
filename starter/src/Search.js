import { Link } from 'react-router-dom';
const Search = () => {
    return (
        <div>
            <div>
                <Link className="close-search" to='/'> Close </Link>
            </div>
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                        />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Search;