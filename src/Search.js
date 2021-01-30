import { Component } from "react";
import BookList from "./BookList";
import * as BooksAPI from './BooksAPI';

export default class Search extends Component {
    state = {
        query: '',
        books: []
    }

    onTyping = e => {
        const val = e.target.value;
        this.setState(prevState => ({
            query: val
        }));
        BooksAPI.search(val)
            .then(books => {
                this.setState(prevState => ({
                    books: books
                }))
            })
    }

    updateBookShelf = (id, shelf) => {
        this.setState(prevState => ({
            books: prevState.books.map(book => {
                book.shelf = book.id === id ? shelf: book.shelf;
                return book;
            })
        }))
        BooksAPI.update({ id }, shelf)
            .then(result => {
                console.log("successfully added");
            })
    }

    render() {
        const { books, query } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" value={query} onChange={this.onTyping} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={books} shelves={this.props.shelves} updateBookShelf={this.updateBookShelf} />
                </div>
            </div>
        )
    }
}