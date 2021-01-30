import { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Shelves from "./Shelves";

export default class Home extends Component {
    state = {
        books: []
    }

    updateBookShelf = (id, shelf) => {
        this.setState(prevState => ({
            books: prevState.books.map(book => {
                book.shelf = book.id === id ? shelf : book.shelf;
                return book;
            })
        }));
        BooksAPI.update({ id }, shelf)
            .then(result => {
                console.log("successfully added");
            })
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => {
                this.setState(prevState => ({
                    books: books
                }))
            })
    }

    render() {
        const { shelves } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelves shelves={shelves} books={this.state.books} updateBookShelf={this.updateBookShelf} />
                <div className="open-search">
                    <Link
                        to="/search"
                    ></Link>
                </div>
            </div>
        )
    }
}