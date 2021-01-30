import { Component } from "react";

export default class BookShelfDropdown extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}