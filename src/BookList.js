import Book from "./Book"

const BookList = props => {
    const { books, shelves } = props;
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => (
                    <Book key={book.id} book={book} shelves={shelves} />
                ))}
            </ol>
        </div>
    )
}

export default BookList;