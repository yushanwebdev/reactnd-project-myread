import { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";

export default class Search extends Component {
    state = {
        query: '',
    }

    onSearch = e => {
        const val = e.target.value;
        this.setState(prevState => ({
            query: val
        }));
        this.props.loadSearchBooks(val);
    }

    render() {
        const { query } = this.state;
        const { books, shelves, updateBookShelf } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" value={query} onChange={this.onSearch} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={books} shelves={shelves} updateBookShelf={updateBookShelf} />
                </div>
            </div>
        )
    }
}