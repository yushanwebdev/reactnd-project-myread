import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Shelves from "./Shelves";

export default class Home extends Component {
    static propTypes = {
        shelves: PropTypes.array.isRequired,
        books: PropTypes.array,
        loadAllBooks: PropTypes.func.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.loadAllBooks();
    }

    render() {
        const { shelves, books, updateBookShelf } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelves 
                    shelves={shelves} 
                    books={books} 
                    updateBookShelf={updateBookShelf} 
                />
                <div className="open-search">
                    <Link
                        to="/search"
                    ></Link>
                </div>
            </div>
        )
    }
}