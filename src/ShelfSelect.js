import { Component } from "react";
import PropTypes from "prop-types";
import ShelfSelectItem from "./ShelfSelectItem";

export default class ShelfSelect extends Component {
    static propTypes = {
        shelves: PropTypes.array.isRequired,
        book: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    onSelectShelf = e => {
        this.props.updateBookShelf(this.props.book, e.target.value);
    }

    render() {
        const { book, shelves } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={this.onSelectShelf} value={book.shelf ? book.shelf : "none"}>
                    <option value="move" disabled>Move to...</option>
                    {
                        shelves.map(shelf => (
                            <ShelfSelectItem 
                                key={shelf.value} 
                                shelf={shelf} 
                            />
                        ))
                    }
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}