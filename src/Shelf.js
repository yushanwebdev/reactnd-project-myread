import BookList from "./BookList";

const BookShelf = props => {
    const { title, books, shelves } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <BookList books={books} shelves={shelves} />
        </div>
    )
}

export default BookShelf;