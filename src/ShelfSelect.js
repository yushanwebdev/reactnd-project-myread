import { Component } from "react";
import ShelfSelectItem from "./ShelfSelectItem";

export default class ShelfSelect extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select>
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