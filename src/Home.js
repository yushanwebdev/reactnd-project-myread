import { Component } from "react";
import * as BooksAPI from './BooksAPI';
import Shelves from "./Shelves";

export default class Home extends Component {
    state = {
        books: []
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
        const { shelves } = props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelves shelves={shelves} books={books} />
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        )
    }
}