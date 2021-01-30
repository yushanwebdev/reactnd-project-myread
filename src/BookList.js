import Book from "./Book"

const Books = props => {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                <Book />
            </ol>
        </div>
    )
}

export default Books;