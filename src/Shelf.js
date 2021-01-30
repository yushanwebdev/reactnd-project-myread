import BookList from "./BookList";

const BookShelf = props => {
    const { title, books, value, shelves, updateBookShelf } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <BookList books={
                books.filter(book => book.shelf === value)
            } shelves={shelves} updateBookShelf={updateBookShelf} />
        </div>
    )
}

export default BookShelf;