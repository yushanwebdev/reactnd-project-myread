import { Component } from "react";
import { Link } from "react-router-dom";
import Shelves from "./Shelves";

export default class Home extends Component {
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