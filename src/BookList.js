import Book from "./Book"

const BookList = props => {
    const { books, shelves, updateBookShelf } = props;
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books && books.map(book => (
                    <Book 
                        key={book.id} 
                        book={book} 
                        shelves={shelves} 
                        updateBookShelf={updateBookShelf} 
                    />
                ))}
            </ol>
        </div>
    )
}

export default BookList;