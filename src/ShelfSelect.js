import { Component } from "react";
import ShelfSelectItem from "./ShelfSelectItem";

export default class ShelfSelect extends Component {
    onSelectShelf = e => {
        this.props.updateBookShelf(this.props.bookID, e.target.value);
    }

    render() {
        const { bookShelf, shelves } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={this.onSelectShelf} value={bookShelf ? bookShelf : "none"}>
                    <option value="move" disabled>Move to...</option>
                    {
                        shelves.map(shelf => (
                            <ShelfSelectItem key={shelf.value} name={shelf.name} value={shelf.value} />
                        ))
                    }
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}