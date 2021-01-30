import { Component } from "react";
import ShelfSelectItem from "./ShelfSelectItem";

export default class ShelfSelect extends Component {
    onSelectShelf = e => {
        this.props.updateBookShelf(this.props.bookID, e.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.onSelectShelf} value={this.props.bookShelf}>
                    <option value="move" disabled>Move to...</option>
                    {
                        this.props.shelves.map(shelf => (
                            <ShelfSelectItem key={shelf.value} name={shelf.name} value={shelf.value} />
                        ))
                    }
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}